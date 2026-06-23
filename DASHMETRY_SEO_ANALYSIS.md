# Dashmetry SEO 模板布局分析报告

- 分析网站：<https://dashmetry.com/>
- 分析日期：2026-06-15
- 分析目标：提炼可用于后续 SEO 模板项目的页面结构、内容模型和技术方案

## 一、核心结论

Dashmetry 本质上是一个“在线游戏功能站 + 程序化 SEO 内容站”。

它真正值得复用的不是视觉样式，而是下面这套增长结构：

```text
游戏数据源
  -> 游戏详情页
  -> 分类页
  -> 标签页
  -> 榜单页
  -> 密集内链
  -> Sitemap 自动收录
```

站点 Sitemap 规模约为：

| 页面类型 | URL 数量 |
| --- | ---: |
| 游戏详情及其他内容页 | 942 |
| 主分类页 | 11 |
| 标签页 | 105 |
| 全站总 URL | 1,059 |

这套模板拥有较强的批量扩展能力，但在内容质量、结构化数据可信度、分页策略和性能方面仍有明显改进空间。

## 二、页面架构

| 页面类型 | URL 示例 | 主要 SEO 目标 |
| --- | --- | --- |
| 品牌首页 | `/` | 品牌词、核心游戏词 |
| 游戏详情页 | `/granny` | 游戏名、Play Online、Free 等长尾词 |
| 主分类页 | `/arcade.games` | Arcade Games 等分类关键词 |
| 标签页 | `/tag/horror` | Horror Games 等细分关键词 |
| 榜单页 | `/new-games` | New Games、Trending、Popular |
| 法律与信任页 | `/about-us`、`/dmca` | 品牌信任、版权和广告合规 |

分类页不是简单的游戏列表，而是“游戏网格 + 分类介绍文章”的组合，因此分类页本身也是一个关键词落地页。

典型分类页包含：

1. 唯一 H1
2. 分类摘要
3. New Games、Most Played、Hot Games 等筛选入口
4. 游戏卡片列表
5. 分页
6. 分类长篇正文
7. 正文上下文内链
8. 推荐游戏

参考页面：<https://dashmetry.com/arcade.games>

## 三、游戏详情页模板

以 <https://dashmetry.com/granny> 为例，页面从上到下基本由以下模块组成：

1. Logo 与主导航
2. 游戏运行区域或封面
3. Play 按钮
4. H1 游戏名称
5. How To Play 操作说明
6. 横向推荐游戏列表
7. 面包屑导航
8. 游戏基础信息
9. 评分和票数
10. 技术与支持平台
11. 分类和标签入口
12. 游戏简介
13. H2/H3 攻略正文
14. 操作方法、特点和技巧
15. 同类游戏上下文链接
16. 评论区
17. 更多推荐游戏
18. 分享与问题反馈
19. 页脚和法律页面

这种布局同时覆盖三类搜索意图：

| 搜索意图 | 页面解决方式 |
| --- | --- |
| 导航意图 | 提供准确的游戏名称和独立 URL |
| 行为意图 | 提供 Play 按钮和在线游戏区域 |
| 信息意图 | 提供玩法、操作、攻略、特点和 FAQ |

## 四、首页模板

首页同时承担品牌首页和核心游戏详情页的角色。

主要模块包括：

1. 核心游戏运行区域
2. 游戏标题和基础信息
3. 游戏简介
4. What Is 模块
5. 开发者与更新介绍
6. 更新日志时间线
7. How To Play
8. 游戏规则
9. 核心功能介绍
10. 社区入口
11. FAQ
12. 评论区
13. 推荐游戏

首页通过核心游戏正文、更新日志和 FAQ 持续获得内容更新信号，比普通静态落地页拥有更强的内容承载能力。

## 五、页面级 SEO 机制

### 5.1 Meta 信息

抽样页面普遍具备：

- 独立 `<title>`
- 独立 Meta Description
- `index,follow`
- Self-referencing Canonical
- Open Graph 标题、描述、图片和 URL
- 唯一 H1
- 服务端直接输出的正文内容

抽样 Meta Description 长度约为 136 至 153 个字符。

### 5.2 标题层级

详情页一般采用：

```text
H1：游戏名称
H2：玩法、特点、相关游戏
H3：操作说明、具体功能、技巧
```

分类页一般采用：

```text
H1：分类名称
H2：分类定义、典型玩法、推荐内容
H3：分类特点、受欢迎原因、玩家类型
```

### 5.3 Canonical

主要可索引页面都使用指向自身的 Canonical，例如：

```html
<link rel="canonical" href="https://dashmetry.com/granny">
```

分页页面则将 Canonical 指向第一页，并设置：

```html
<meta name="robots" content="noindex,nofollow">
```

## 六、结构化数据

游戏详情页主要使用：

- `SoftwareApplication`
- `GameApplication`
- `AggregateRating`
- `Offer`
- `BreadcrumbList`

免费游戏通过下面的方式表达：

```json
{
  "@type": "Offer",
  "price": "0",
  "priceCurrency": "USD"
}
```

分类页和标签页主要使用 `BreadcrumbList`。

参考资料：

- [Google Software App structured data](https://developers.google.com/search/docs/appearance/structured-data/software-app)
- [Schema.org SoftwareApplication](https://schema.org/SoftwareApplication)

## 七、内链系统

Dashmetry 的 SEO 扩展能力很大程度上来自内链结构。

### 7.1 全局内链

- 主分类导航
- Newest
- Trending
- Top Popular
- Favorite Games
- 页脚法律页面

### 7.2 页面上下文内链

- 面包屑
- 游戏分类
- 游戏标签
- 正文关键词链接
- 同类型游戏推荐
- 游戏系列推荐
- New、Hot、Top Rated 状态入口

### 7.3 内容关系模型

推荐系统大致可以抽象为：

```text
当前游戏
  -> 主分类
  -> 多个标签
  -> 同分类游戏
  -> 同标签游戏
  -> 热门游戏
  -> 最新游戏
  -> 编辑推荐
```

后续项目应当将这些关系存储在结构化数据中，由模板自动生成内链。

## 八、Sitemap 与抓取策略

站点提供：

- `robots.txt`
- 根目录 XML Sitemap
- 页面 Canonical
- 页面级 Robots Meta

`robots.txt` 主要屏蔽：

- 游戏嵌入地址
- Unity、WASM 和数据资源
- 搜索参数
- 预览参数
- 分页和排序参数
- 后台及 AJAX 地址

Sitemap 中：

- 分类页和标签页大多标记为 `weekly`
- 游戏页大多标记为 `hourly`
- 约 228 个 URL 缺少 `lastmod`

需要注意，Google 会忽略 Sitemap 中的 `changefreq`，真实准确的 `lastmod` 更重要。

参考资料：

- [Google Sitemap 指南](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [Google Canonical 指南](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls)

## 九、做得好的地方

1. 页面类型清晰，适合大规模程序化生成。
2. 每个游戏拥有独立 URL、描述、图片和正文。
3. 分类页和标签页都有可索引内容，不只是空列表。
4. 首页将核心游戏、更新日志、FAQ 和社区信息集中在一个高权重页面。
5. 游戏信息、正文和相关推荐组合，搜索意图覆盖完整。
6. 图片基本具备 `alt` 属性。
7. 使用 Cloudflare 缓存、HTTPS、HSTS 和基础安全响应头。
8. About、Contact、DMCA、Privacy 和 Terms 页面齐全。
9. 可索引正文直接存在于 HTML 中，不依赖客户端渲染。
10. 标签、分类和推荐模块形成了较密集的主题内链网络。

## 十、主要问题

### 10.1 高风险问题

#### 结构化数据可信度

首页 JSON-LD 的 `sameAs` 包含大量疑似与品牌无关的社交账号，可能造成品牌实体混乱，并带来结构化数据滥用风险。

部分页面可见评分与 JSON-LD 中的评分、票数不一致。后续模板必须保证结构化数据与页面实际展示完全同步。

#### 内容质量

部分英文正文存在：

- 拼写错误
- 语法错误
- 生硬表达
- 关键词模板痕迹
- 内容事实不足
- 分类页结构高度重复

后续项目不能只替换关键词批量生成正文，否则容易形成低质量或薄内容页面。

#### 页面标题过短

部分页面 Title 只有游戏名或分类名，例如：

```text
Granny
Horror
Dashmetry
```

没有充分覆盖 `Play Online`、`Free`、`Games` 等搜索意图。

### 10.2 技术问题

1. 大量 URL 使用没有实际 SEO 作用的 `changefreq=hourly`。
2. Sitemap 中部分 URL 缺少准确的 `lastmod`。
3. 分页页同时被 robots.txt 屏蔽并设置 `noindex,nofollow`，页面发现过度依赖 Sitemap。
4. 首页图片数量较多，但只有部分图片使用懒加载。
5. 部分图片缺少明确的高度，可能产生 CLS。
6. CSS 文件存在重复引入迹象。
7. 广告、统计、jQuery 和 Cloudflare 脚本可能影响 Core Web Vitals。
8. 缺少 Twitter Card。
9. 分类页缺少 `CollectionPage` 或 `ItemList` 结构化数据。
10. 首页承担过多功能，游戏、内容和弹窗可能增加首屏负载。

## 十一、推荐的 SEO 模板设计

后续项目建议保留 Dashmetry 的信息架构，但重新设计技术实现。

### 11.1 页面类型

项目至少应包含：

```text
/
/games/[slug]
/categories/[slug]
/tags/[slug]
/new-games
/popular-games
/trending-games
/about
/contact
/dmca
/privacy
/terms
```

### 11.2 Title 模板

首页：

```text
{Brand} - Play Free Online Games
```

游戏详情页：

```text
{Game Name} - Play Online Free | {Brand}
```

分类页：

```text
Best {Category} Games - Play Online Free | {Brand}
```

标签页：

```text
{Tag} Games - Free Online Games | {Brand}
```

### 11.3 Description 模板

详情页描述不能只机械替换游戏名，应该至少包含：

- 游戏类型
- 核心玩法
- 差异化特点
- 免费在线游玩的行动词

例如：

```text
Play {Game Name} online for free. Master {core mechanic}, explore
{unique feature}, and enjoy the game directly in your browser.
```

### 11.4 结构化数据

游戏页：

```text
SoftwareApplication
BreadcrumbList
WebPage
```

分类和标签页：

```text
CollectionPage
ItemList
BreadcrumbList
```

首页：

```text
WebSite
Organization
SearchAction
```

只有在评分真实、可见并且可追溯时，才输出 `AggregateRating`。

## 十二、建议的数据模型

### 游戏数据

```ts
interface Game {
  id: string
  slug: string
  name: string
  title: string
  description: string
  shortDescription: string
  instructions: string[]
  content: ContentSection[]
  thumbnail: string
  coverImage: string
  embedUrl: string
  developer?: string
  releaseDate?: string
  technology?: string
  platforms: string[]
  categoryIds: string[]
  tagIds: string[]
  relatedGameIds: string[]
  rating?: number
  ratingCount?: number
  publishedAt: string
  updatedAt: string
  status: "draft" | "published"
}
```

### 分类数据

```ts
interface Category {
  id: string
  slug: string
  name: string
  title: string
  description: string
  introduction: string
  content: ContentSection[]
  featuredGameIds: string[]
  updatedAt: string
}
```

### 内容段落

```ts
interface ContentSection {
  heading: string
  level: 2 | 3
  paragraphs: string[]
  list?: string[]
  relatedLinks?: string[]
}
```

## 十三、性能建议

1. 使用 SSR 或 SSG 输出完整 HTML。
2. 游戏运行模块延迟加载，避免阻塞正文首屏。
3. 首屏图片使用 preload，其余图片使用 lazy loading。
4. 图片统一生成 WebP 或 AVIF。
5. 所有图片提供 `width`、`height` 和响应式 `srcset`。
6. 非必要脚本使用 `defer` 或延迟加载。
7. 广告区域预留固定尺寸，减少 CLS。
8. 拆分关键 CSS 与非关键 CSS。
9. 使用 CDN 缓存图片、脚本和静态页面。
10. 在构建阶段检查重复 Title、Description、Canonical 和 H1。

## 十四、内容质量规则

为了避免程序化 SEO 变成低质量批量页面，建议设置以下发布门槛：

- 每个游戏必须有独立简介。
- 每个游戏必须有真实操作说明。
- 每个游戏至少有一个差异化玩法段落。
- 推荐游戏必须给出相关性依据。
- 无足够游戏数量的标签页不允许收录。
- 内容过短的分类页设置为 `noindex`。
- 禁止创建只有关键词不同、正文基本相同的页面。
- 更新时间必须对应真实内容变化。
- AI 生成内容需要经过事实校验和语言质量检查。

## 十五、实施优先级

### P0：项目基础

- 游戏、分类、标签数据模型
- SSR/SSG 页面生成
- 动态 Metadata
- Canonical
- robots.txt
- Sitemap

### P1：核心 SEO 页面

- 游戏详情页模板
- 分类页模板
- 标签页模板
- 榜单页模板
- 面包屑和相关推荐

### P2：结构化数据与性能

- JSON-LD
- 图片优化
- 游戏 iframe 延迟加载
- Core Web Vitals 优化
- 自动 SEO 校验

### P3：运营能力

- 内容后台
- 自动内链
- 热门榜单
- Search Console 数据接入
- 页面质量评分

## 十六、最终建议

后续项目应构建成“一个数据后台驱动多种 SEO 页面”的系统，而不是逐页硬编码。

Dashmetry 最值得借鉴的是：

- 游戏详情页与信息内容结合
- 分类和标签形成主题集群
- 推荐模块形成大量内部链接
- Sitemap 支撑批量页面发现
- 核心游戏首页持续更新

不建议直接复制的是：

- 低质量批量正文
- 不可信的评分和 `sameAs`
- 过度简单的 Title
- 不准确的 Sitemap 更新时间
- 同时阻止抓取和跟踪的分页方案
- 资源重复加载和不完整的图片尺寸设置

最终模板需要在 Dashmetry 的可扩展架构基础上，提高内容可信度、结构化数据一致性、页面性能和程序化 SEO 的质量控制。
