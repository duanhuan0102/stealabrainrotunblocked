const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://example.com";

export const siteConfig = {
  name: "ArcadeForge",
  shortName: "AF",
  url: configuredUrl,
  description:
    "Play carefully selected browser games online for free. Discover fresh arcade, puzzle, racing, and skill games with clear guides and no downloads.",
  locale: "en_US",
  language: "en",
  email: "hello@example.com",
  copyrightStartYear: 2026,
  navigation: [
    { label: "New Games", href: "/new-games" },
    { label: "Popular", href: "/popular-games" },
    { label: "Trending", href: "/trending-games" },
    { label: "Arcade", href: "/categories/arcade" },
    { label: "Puzzle", href: "/categories/puzzle" },
  ],
} as const;

export const seoConfig = {
  minGamesForIndexableTag: 2,
} as const;
