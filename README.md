# Game SEO Template

一个基于 Next.js App Router、TypeScript 和静态生成的游戏站模板。项目结构来自对 Dashmetry 页面模型的分析，但对内容质量、结构化数据、标签收录和性能策略进行了重新设计。

详细分析见 [DASHMETRY_SEO_ANALYSIS.md](./DASHMETRY_SEO_ANALYSIS.md)。

## 已包含的能力

- 响应式游戏站首页
- 游戏详情页与延迟加载播放器
- 分类页、标签页、最新榜、热门榜和趋势榜
- About、Contact、DMCA、Privacy、Terms 信任页面
- 动态 Title、Description、Canonical 和 Open Graph
- 游戏详情页动态社交分享图
- `SoftwareApplication`、`CollectionPage`、`ItemList` 和面包屑 JSON-LD
- 自动生成 `robots.txt` 和 `sitemap.xml`
- 低内容标签页自动 `noindex`
- 本地 HTML5 Canvas 示例游戏
- 无远程图片和字体依赖

## 技术栈

- Next.js 15 App Router
- React 19
- TypeScript
- 原生 CSS
- Next.js Metadata API

## 本地运行

需要 Node.js 20 或更新版本。

```bash
npm install
npm run dev
```

浏览器访问 <http://localhost:3000>。

生产检查：

```bash
npm run typecheck
npm run lint
npm run build
```

## 快速创建新游戏站

### 1. 修改品牌配置

编辑 `src/config/site.ts`：

```ts
export const siteConfig = {
  name: "YourGameSite",
  shortName: "YG",
  url: "https://your-domain.com",
  description: "Your site description",
  email: "hello@your-domain.com",
};
```

生产环境建议通过环境变量设置域名：

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

### 2. 修改分类和标签

- 分类：`src/data/categories.ts`
- 标签：`src/data/tags.ts`

分类正文用于构建分类关键词落地页。不要只更换分类名称，应为每个分类编写独立介绍和内容段落。

### 3. 添加游戏

在 `src/data/games.ts` 中添加一个 `Game` 对象：

```ts
{
  slug: "my-game",
  name: "My Game",
  tagline: "A short, useful promise.",
  description: "A unique meta description and game summary.",
  instructions: [
    "Use the arrow keys to move.",
    "Avoid obstacles and reach the exit."
  ],
  content: [
    {
      heading: "How to play My Game",
      paragraphs: ["Write content that reflects the real game."]
    }
  ],
  category: "arcade",
  tags: ["one-button", "high-score"],
  accent: "#ff5a67",
  icon: "M",
  developer: "Studio Name",
  technology: "HTML5",
  platforms: ["Desktop", "Mobile"],
  publishedAt: "2026-06-15",
  updatedAt: "2026-06-15",
  plays: 0,
  embedUrl: "/embed/my-game/index.html"
}
```

添加后会自动获得：

- `/games/my-game`
- Metadata 和 Canonical
- JSON-LD
- Sitemap 条目
- 分类与标签关联
- 相关游戏推荐
- 动态 Open Graph 图片

### 4. 接入 HTML5 游戏

将游戏文件放入：

```text
public/embed/my-game/
```

入口文件为：

```text
public/embed/my-game/index.html
```

游戏数据中设置：

```ts
embedUrl: "/embed/my-game/index.html"
```

播放器只有在用户点击 Play 后才加载 iframe，避免游戏资源阻塞页面首屏。

## 目录说明

```text
app/
  games/[slug]/          游戏详情页与动态分享图
  categories/[slug]/     分类 SEO 落地页
  tags/[slug]/           标签 SEO 落地页
  new-games/             最新游戏
  popular-games/         热门游戏
  trending-games/        趋势游戏
  robots.ts              robots.txt
  sitemap.ts             sitemap.xml
src/
  components/            可复用页面组件
  config/site.ts         品牌与 SEO 配置
  data/                   游戏、分类和标签数据
  lib/                    SEO 与格式化工具
  types/                  内容类型
public/
  embed/                  HTML5 游戏文件
```

## SEO 规则

### 游戏详情页

Title 模板：

```text
{Game Name} - Play Online Free | {Brand}
```

每页必须提供独立的：

- `description`
- `tagline`
- `instructions`
- `content`
- `updatedAt`

只有同时存在 `rating` 和 `ratingCount` 时，页面才会输出 `AggregateRating`。

### 标签页

`seoConfig.minGamesForIndexableTag` 控制标签页的收录门槛。

游戏数量不足的标签页：

- 页面仍然存在，供用户和爬虫访问
- 输出 `noindex,follow`
- 不写入 Sitemap

这可以减少只有一张游戏卡片的薄内容页面。

### Sitemap

游戏页面的 `lastModified` 来自游戏数据中的 `updatedAt`。只有发生真实内容变化时才更新该字段。

## 上线前必须修改

1. 将 `NEXT_PUBLIC_SITE_URL` 设置为正式域名。
2. 替换品牌名称、邮箱和网站描述。
3. 删除示例游戏或改为真实内容。
4. 根据实际服务完善 Privacy、Terms 和 DMCA。
5. 确认所有游戏拥有合法的分发或嵌入权限。
6. 验证评分数据与页面可见数据一致。
7. 在 Google Rich Results Test 中检查 JSON-LD。
8. 在 Search Console 提交 `/sitemap.xml`。

## 内容质量原则

- 不批量生成只有关键词不同的正文。
- 不伪造评分、播放量、开发者和更新时间。
- 推荐关系应基于分类或标签相关性。
- 没有足够内容的页面应保持 `noindex`。
- 游戏下架后应返回 404、410，或重定向到真实替代页面。
