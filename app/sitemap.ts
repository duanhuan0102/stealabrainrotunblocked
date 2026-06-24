import type { MetadataRoute } from "next";
import { seoConfig, siteConfig } from "@/src/config/site";
import { categories } from "@/src/data/categories";
import { games, getGamesByCategory, getGamesByTag } from "@/src/data/games";
import { tags } from "@/src/data/tags";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/dmca",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const listingRoutes =
    games.length >= 2 ? ["/new-games", "/popular-games", "/trending-games"] : [];
  const staticEntries: MetadataRoute.Sitemap = [
    ...staticRoutes,
    ...listingRoutes,
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date("2026-06-15"),
    changeFrequency: route === "" ? "daily" : "monthly",
    priority: route === "" ? 1 : route.includes("games") ? 0.8 : 0.4,
  }));

  const gameEntries: MetadataRoute.Sitemap = games.map((game) => ({
    url: `${siteConfig.url}/games/${game.slug}`,
    lastModified: new Date(game.updatedAt),
    changeFrequency: "monthly",
    priority: game.featured ? 0.9 : 0.8,
  }));

  const categoryEntries: MetadataRoute.Sitemap = categories
    .filter((category) => getGamesByCategory(category.slug).length > 0)
    .map((category) => ({
      url: `${siteConfig.url}/categories/${category.slug}`,
      lastModified: new Date("2026-06-15"),
      changeFrequency: "weekly",
      priority: 0.7,
    }));

  const tagEntries: MetadataRoute.Sitemap = tags
    .filter(
      (tag) =>
        getGamesByTag(tag.slug).length >= seoConfig.minGamesForIndexableTag,
    )
    .map((tag) => ({
      url: `${siteConfig.url}/tags/${tag.slug}`,
      lastModified: new Date("2026-06-15"),
      changeFrequency: "weekly",
      priority: 0.6,
    }));

  return [
    ...staticEntries,
    ...gameEntries,
    ...categoryEntries,
    ...tagEntries,
  ];
}
