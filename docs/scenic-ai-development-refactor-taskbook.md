# 景区后端 Java 化重构 AI 开发任务书

> 本文档用于交给 AI 开发代理、AI 编程助手或开发团队执行。  
> 目标不是重新设计一套全新系统，而是在保持原有微服务边界的前提下，把现有 Go + Java 后端逐步统一为 Java 技术栈，并补齐高并发、幂等、审计和 AI 数字员工调用能力。

## 1. 重构总目标

当前景区后端由多个项目组成，部分核心能力在 Java 项目中，部分核心能力在 Go 项目中。本次重构目标是：

1. 保持原有微服务职责划分，不大规模重拆服务。
2. 将 Go 后端中的核心业务能力逐步迁移为 Java。
3. 优先重构以下功能闭环：
   - 创建产品
   - 创建商品
   - 配置发行规则
   - 配置核销规则
   - 创建库存
   - 设置价格策略
   - 创建店铺
   - 店铺导入商品
   - 商品上架到窗口售卖
   - 门票核销
4. 所有新接口必须支持高并发场景。
5. 所有可被 AI 数字员工调用的接口必须具备：
   - 明确入参
   - 幂等控制
   - dry-run 预执行
   - 权限校验
   - 操作审计
   - 结构化错误返回
   - 可回滚或可补偿机制

## 2. 已知项目与服务边界

AI 开发时必须优先遵守现有项目边界，不允许随意重命名、合并或拆分服务。

| 项目/模块 | 当前定位 | 重构要求 |
| --- | --- | --- |
| `api-v2` | 管理端 API、BFF、后台入口 | 保留。可增加 AI 工具入口、统一接口、权限审计 |
| `ticket` | 产品、票种商品、发行规则、核销规则、门票核销 | 保留。作为产品与核销核心服务继续演进 |
| `order` | 订单、支付、退款、履约编排 | 保留。后续对接新的 Java 库存和价格能力 |
| `distribution` | Go 项目，店铺、店铺商品、价格、库存、库存流水 | 重点迁移。新建或改造为 Java 版分销服务 |
| `scenic-common` | 公共 DTO、枚举、proto、基础工具 | 保留。新接口公共模型优先沉淀到这里 |
| `erp/device/cas/my` | 周边服务 | 本轮非核心，不主动重构，只做必要适配 |

推荐目标边界：

```text
api-v2
  管理端接口
  AI 工具接口
  权限审计
  请求聚合

ticket
  产品
  商品
  发行规则
  核销规则
  门票核销

distribution-java
  店铺
  店铺商品
  上架下架
  价格策略
  库存
  库存流水

order
  下单
  支付
  退款
  库存确认
  履约状态
```

## 3. 技术栈约束

AI 开发时必须使用当前项目已有技术栈，不允许随意引入大型新框架。

基础技术栈：

| 类型 | 技术 |
| --- | --- |
| 语言 | Java 21 |
| 框架 | Spring Boot 3.3.x |
| 微服务 | Spring Cloud 2023.x |
| 注册配置 | Nacos |
| 内部调用 | gRPC 优先，必要时 Feign |
| 外部接口 | REST + OpenAPI 3 |
| 数据库 | PostgreSQL |
| ORM | MyBatis / MyBatis-Plus / JPA 按原模块风格选择 |
| 缓存 | Redis |
| 分布式锁 | Redisson |
| 消息队列 | RabbitMQ |
| 接口文档 | Knife4j / springdoc-openapi |
| 可观测性 | Micrometer / OpenTelemetry |
| 容错 | Resilience4j |

禁止事项：

1. 不允许为了方便直接引入新的数据库。
2. 不允许把库存扣减只做在内存里。
3. 不允许绕过 Redis/DB 幂等控制。
4. 不允许用 AI 接口直接调用 Mapper。
5. 不允许跳过权限、租户、景区上下文。

## 4. AI 开发总原则

AI 每次只能处理一个明确功能闭环。

标准执行顺序：

```text
扫描旧实现
  -> 输出旧接口/旧表/旧逻辑摘要
  -> 设计 Java 目标接口
  -> 实现 Adapter 或新服务
  -> 补幂等、权限、审计
  -> 补单元测试/接口测试
  -> 输出迁移说明
```

每次任务必须交付：

1. 修改文件列表。
2. 旧逻辑对应关系。
3. 新接口说明。
4. 数据库影响说明。
5. 幂等策略说明。
6. 并发安全说明。
7. 测试结果。
8. 是否可以切流量。

## 5. 推荐迁移路线

### 阶段 0：接口与领域盘点

目标：让 AI 先理解旧系统，不直接改业务代码。

任务：

1. 扫描 `ticket` 中产品、商品、规则、核销相关代码。
2. 扫描 `distribution` 中店铺、店铺商品、价格、库存、库存流水相关代码。
3. 扫描 `order` 中下单、支付、退款、库存联动代码。
4. 输出旧接口到新接口映射表。
5. 输出核心表结构清单。

验收：

```text
必须产出：
- old-to-new-api-map.md
- domain-model-summary.md
- database-table-summary.md
```

### 阶段 1：Java 版 distribution 服务骨架

目标：将 Go `distribution` 的核心能力迁移到 Java 服务边界中。

建议模块名：

```text
distribution-java
```

如果已有 Java 分销服务，则在原服务内新增模块，不要重复造服务。

基础包结构：

```text
com.hqshuke.distribution
  store
  storegoods
  price
  inventory
  stockrecord
  common
  api
  grpc
  event
```

验收：

```text
- 服务可以启动
- 已接入 Nacos
- 已接入 Redis
- 已接入 PostgreSQL
- 已接入 RabbitMQ
- 提供 health check
- 提供 OpenAPI 文档
```

### 阶段 2：店铺与店铺商品迁移

对应旧能力：

```text
distribution.pb.StoreService
distribution.pb.StoreGoodsService
```

迁移功能：

1. 创建店铺。
2. 修改店铺。
3. 查询店铺。
4. 店铺授权。
5. 店铺导入普通商品。
6. 店铺导入组合商品。
7. 店铺商品上架。
8. 店铺商品下架。
9. 查询店铺可售商品。

目标接口：

```http
POST /api/v2/stores
PUT  /api/v2/stores/{storeId}
GET  /api/v2/stores
GET  /api/v2/stores/{storeId}
POST /api/v2/stores/{storeId}/permissions
POST /api/v2/stores/{storeId}/goods/import
POST /api/v2/store-goods/{storeGoodsId}/publish
POST /api/v2/store-goods/{storeGoodsId}/unpublish
GET  /api/v2/stores/{storeId}/goods
```

AI 工具接口：

```http
POST /ai/tools/store.create
POST /ai/tools/store.import-goods
POST /ai/tools/store.publish-goods
POST /ai/tools/store.unpublish-goods
```

并发与幂等要求：

1. 创建店铺按 `tenantId + scenicId + storeName` 做重复校验。
2. 导入商品按 `storeId + goodsId + priceId` 防重复。
3. 上架/下架必须幂等，重复请求返回当前状态。
4. 上架前必须校验商品有效、价格有效、库存可售、店铺权限有效。

### 阶段 3：价格策略迁移

对应旧能力：

```text
distribution.pb.PriceService
```

迁移功能：

1. 新增价格策略。
2. 修改价格策略。
3. 删除或停用价格策略。
4. 设置自营价。
5. 查询商品有效价格。
6. 查询历史价格。
7. 动态价格过期处理。

目标接口：

```http
POST /api/v2/price-strategies
PUT  /api/v2/price-strategies/{strategyId}
POST /api/v2/price-strategies/{strategyId}/enable
POST /api/v2/price-strategies/{strategyId}/disable
GET  /api/v2/goods/{goodsId}/effective-price
GET  /api/v2/goods/{goodsId}/price-history
```

AI 工具接口：

```http
POST /ai/tools/price.validate
POST /ai/tools/price.create-strategy
POST /ai/tools/price.update-strategy
POST /ai/tools/price.enable-strategy
POST /ai/tools/price.disable-strategy
```

关键要求：

1. 价格策略变更不能影响历史订单。
2. 下单时必须生成价格快照。
3. 批量改价必须支持 dry-run。
4. 高风险价格变更需要人工确认。
5. 价格变更成功后发送事件刷新商品展示缓存。

### 阶段 4：库存能力迁移

对应旧能力：

```text
distribution.pb.DistributionInventoryService
distribution.pb.StockChangeRecordService
```

迁移功能：

1. 创建库存批次。
2. 查询商品库存。
3. 冻结库存。
4. 确认扣减库存。
5. 取消冻结。
6. 退款或异常回滚库存。
7. 记录库存流水。
8. 过期库存处理。

目标接口：

```http
POST /api/v2/inventory/batches
GET  /api/v2/inventory/goods/{goodsId}
POST /api/v2/inventory/freeze
POST /api/v2/inventory/confirm
POST /api/v2/inventory/cancel
POST /api/v2/inventory/reverse
GET  /api/v2/inventory/records
```

库存状态模型：

```text
available 可售库存
frozen    冻结库存
sold      已售库存
expired   过期库存
destroyed 销毁库存
```

标准库存流程：

```text
下单前/下单中
  freeze

支付成功
  confirm

超时未支付
  cancel

退款/失败/异常补偿
  reverse
```

高并发要求：

1. 所有库存写操作必须有 `idempotencyKey`。
2. Redis 使用 Lua 脚本做热点库存原子扣减。
3. DB 使用 `version` 乐观锁做最终一致校验。
4. 库存流水必须与库存变化在同一事务或可靠消息内完成。
5. 库存扣减失败必须返回明确错误码，不允许静默失败。
6. 重复确认、重复取消、重复回滚必须幂等。

### 阶段 5：产品、商品、规则整理

对应旧能力：

```text
ticket.goods.handler.GoodsHandler
ticket.sticket.handler.SimpleTicketHandler
ticket.issue.handler.RuleIssueHandler
ticket.check.handler.RuleCheckHandler
```

重构功能：

1. 创建产品。
2. 修改产品。
3. 创建商品。
4. 修改商品。
5. 配置发行规则。
6. 配置核销规则。
7. 校验商品是否可售。

目标接口：

```http
POST /api/v2/products
PUT  /api/v2/products/{productId}
POST /api/v2/products/{productId}/goods
PUT  /api/v2/goods/{goodsId}
PUT  /api/v2/goods/{goodsId}/rules/issue
PUT  /api/v2/goods/{goodsId}/rules/check
GET  /api/v2/goods/{goodsId}/sale-check
```

AI 工具接口：

```http
POST /ai/tools/product.validate
POST /ai/tools/product.create
POST /ai/tools/goods.validate
POST /ai/tools/goods.create
POST /ai/tools/goods.update-rule
```

关键要求：

1. 不破坏现有 `ticket` 服务职责。
2. 已绑定订单、库存、数字资产的商品不能随意修改关键字段。
3. 商品规则变化后必须通知订单缓存和销售缓存刷新。
4. 创建商品时必须返回标准 `goodsId`，供价格、库存、店铺导入使用。

### 阶段 6：窗口售卖链路打通

目标：从商品创建到窗口可售形成完整闭环。

完整流程：

```text
创建产品
  -> 创建商品
  -> 配置发行规则
  -> 配置核销规则
  -> 创建库存
  -> 设置价格策略
  -> 创建店铺
  -> 店铺导入商品
  -> 授权售票窗口
  -> 商品上架
  -> 窗口可售
```

验收接口：

```http
GET /api/v2/window/{windowId}/saleable-goods
```

返回中必须包含：

```json
{
  "storeId": "string",
  "windowId": "string",
  "goodsId": "string",
  "storeGoodsId": "string",
  "goodsName": "string",
  "price": 100,
  "availableStock": 100,
  "saleable": true,
  "unsaleableReason": null
}
```

### 阶段 7：门票核销重构

对应旧能力：

```text
ticket.check.handler.RuleCheckHandler
TicketCheckRecordMapper
OrderCheckMapper
```

目标接口：

```http
POST /api/v2/tickets/verify/preview
POST /api/v2/tickets/verify/confirm
GET  /api/v2/tickets/verify-records
GET  /api/v2/tickets/{ticketCode}/verify-status
```

AI 工具接口：

```http
POST /ai/tools/ticket.verify-preview
POST /ai/tools/ticket.verify-confirm
POST /ai/tools/ticket.verify-record-query
```

核销要求：

1. 先预校验，再确认核销。
2. 核销确认必须幂等。
3. 幂等维度建议为 `ticketCode + checkPointId + idempotencyKey`。
4. 重复核销必须返回明确业务状态。
5. 核销成功必须写核销记录。
6. 核销失败必须返回可解释错误。
7. 设备核销、人工核销、AI 辅助核销必须统一底层能力。

## 6. AI 工具接口统一规范

所有 `/ai/tools/**` 接口必须遵守统一协议。

请求头：

```http
X-Tenant-Id: tenant_id
X-Scenic-Id: scenic_id
X-Operator-Id: operator_id
X-Ai-Agent-Id: ai_agent_id
X-Idempotency-Key: unique_key
```

请求体：

```json
{
  "dryRun": true,
  "reason": "根据运营人员指令创建店铺商品",
  "payload": {}
}
```

响应体：

```json
{
  "success": true,
  "requestId": "req_xxx",
  "idempotencyKey": "unique_key",
  "data": {},
  "warnings": [],
  "error": null
}
```

失败响应：

```json
{
  "success": false,
  "requestId": "req_xxx",
  "idempotencyKey": "unique_key",
  "data": null,
  "warnings": [],
  "error": {
    "code": "GOODS_PRICE_NOT_FOUND",
    "message": "商品未配置有效价格，不能上架",
    "retriable": false,
    "suggestedAction": "请先配置价格策略后再上架"
  }
}
```

## 7. AI 开发禁止事项

AI 执行重构时禁止：

1. 禁止一次性全项目大改。
2. 禁止改变原微服务职责边界。
3. 禁止未经确认删除旧接口。
4. 禁止直接绕过 Service 调 Mapper。
5. 禁止库存无幂等扣减。
6. 禁止核销无幂等确认。
7. 禁止价格变更影响历史订单。
8. 禁止 AI 接口没有 dry-run。
9. 禁止没有审计日志的执行接口上线。
10. 禁止没有测试就声称迁移完成。

## 8. AI 每个任务的交付模板

AI 每完成一个功能，必须输出以下内容：

```md
# 功能迁移报告

## 1. 本次迁移功能

## 2. 旧代码位置

## 3. 新代码位置

## 4. 旧接口到新接口映射

## 5. 数据库变更

## 6. 幂等设计

## 7. 并发安全设计

## 8. 权限与审计

## 9. 测试结果

## 10. 未完成事项

## 11. 是否建议切流量
```

## 9. 第一批建议交给 AI 的具体任务

### 任务 1：扫描并整理旧接口映射

输入：

```text
ticket
distribution
order
api-v2
scenic-common
```

输出：

```text
old-to-new-api-map.md
domain-model-summary.md
```

不允许改代码。

### 任务 2：创建 Java 版 distribution 服务骨架

输入：

```text
distribution Go 项目
现有 Java 服务技术栈
```

输出：

```text
distribution-java 服务骨架
health check
OpenAPI 文档
Nacos 配置
Redis 配置
PostgreSQL 配置
RabbitMQ 配置
```

### 任务 3：迁移店铺创建与查询

范围：

```text
StoreService.Create
StoreService.Modify
StoreService.List
StoreService.Page
StoreService.QueryStore
```

验收：

```text
新 Java 接口行为与旧 Go 接口一致
支持幂等创建
支持权限审计
有接口测试
```

### 任务 4：迁移店铺商品导入与上架

范围：

```text
StoreGoodsService.AppendSimpleGoods
StoreGoodsService.AppendComposeGoods
StoreGoodsService.UpDownStoreGoods
StoreGoodsService.QueryStoreGoodsPage
```

验收：

```text
可导入商品
可上架
可下架
重复请求幂等
上架前校验商品、价格、库存、权限
```

### 任务 5：迁移价格策略

范围：

```text
PriceService.AddPrice
PriceService.EditPrice
PriceService.QueryConfiguredPrice
PriceService.SetSelfPrice
PriceService.QuerySelfPrice
```

验收：

```text
可设置价格
可查询有效价格
下单可生成价格快照
价格变更不影响历史订单
```

### 任务 6：迁移库存冻结与扣减

范围：

```text
DistributionInventoryService.Deduct2C
DistributionInventoryService.ReverseDeduct2C
DistributionInventoryService.Deduct2B
DistributionInventoryService.Deduct2BSuccess
DistributionInventoryService.Deduct2BFail
StockChangeRecordService.CreateStockRecord
```

验收：

```text
支持 freeze/confirm/cancel/reverse
支持 Redis 原子扣减
支持 DB 乐观锁
支持库存流水
支持重复请求幂等
通过并发压测
```

### 任务 7：整理门票核销

范围：

```text
RuleCheckHandler
TicketCheckRecordMapper
OrderCheckMapper
```

验收：

```text
支持核销预校验
支持确认核销
重复核销幂等
核销记录完整
设备、人工、AI 核销统一底层接口
```

## 10. 最小可上线闭环

第一阶段最小上线目标：

```text
创建产品
创建商品
配置规则
创建库存
设置价格
创建店铺
店铺导入商品
商品上架
窗口查询可售商品
下单冻结库存
支付确认扣减
门票核销
```

达到这个闭环后，才允许扩大到批量改价、动态价格、批量上架、AI 自动运营。

## 11. 给 AI 的最终执行指令

可以直接把下面这段作为 AI 开发代理的系统任务说明：

```text
你正在重构一个景区后端系统。系统已有多个微服务项目，本次重构必须保持原有微服务边界，不允许重新拆分成全新架构。

当前核心 Java 服务包括 api-v2、ticket、order、scenic-common。
当前 Go 服务 distribution 中包含店铺、店铺商品、价格、库存、库存流水等能力，是本次 Java 化迁移重点。

你每次只能处理一个业务闭环。处理前先扫描旧实现，输出旧接口、旧模型、旧表结构和调用关系。然后设计 Java 目标接口，实现代码，补充幂等、权限、审计、测试，最后输出迁移报告。

所有新接口必须支持高并发。库存必须支持幂等、Redis 原子扣减、DB 乐观锁、库存流水和异常补偿。价格必须支持订单价格快照，不能影响历史订单。核销必须支持预校验和确认核销，确认动作必须幂等。

AI 数字员工只能调用 /ai/tools/** 接口。AI 工具接口必须支持 dryRun、idempotencyKey、operatorId、aiAgentId、审计日志、结构化错误和人工确认机制。

禁止一次性全项目大改。禁止改变原微服务职责。禁止绕过 Service 直接操作 Mapper。禁止没有测试和迁移报告就声明完成。
```

