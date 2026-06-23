import type { Metadata } from "next";
import { ListingPage } from "@/src/components/listing-page";
import { getTrendingGames } from "@/src/data/games";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Trending Games - Play What Is Hot",
  description:
    "See which free browser games are trending now and jump into the challenges players are sharing and replaying.",
  path: "/trending-games",
});

export default function TrendingGamesPage() {
  return (
    <ListingPage
      eyebrow="Hot right now"
      title="Trending Games"
      description="A focused list of games currently gaining attention."
      games={getTrendingGames()}
    />
  );
}
