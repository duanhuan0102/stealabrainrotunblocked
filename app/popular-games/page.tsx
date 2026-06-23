import type { Metadata } from "next";
import { ListingPage } from "@/src/components/listing-page";
import { getPopularGames } from "@/src/data/games";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Popular Games - Most Played Online",
  description:
    "Discover the most-played free online games on ArcadeForge, from quick arcade challenges to thoughtful puzzles.",
  path: "/popular-games",
});

export default function PopularGamesPage() {
  return (
    <ListingPage
      eyebrow="Player favorites"
      title="Popular Games"
      description="The games with the most plays across the site."
      games={getPopularGames()}
    />
  );
}
