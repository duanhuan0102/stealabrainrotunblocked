import type { Metadata } from "next";
import { ListingPage } from "@/src/components/listing-page";
import { getTrendingGames } from "@/src/data/games";
import { createMetadata } from "@/src/lib/seo";

const trendingGames = getTrendingGames();

const pageMetadata = createMetadata({
  title: "Trending Games - Play What Is Hot",
  description:
    "See which free browser games are trending on Steal A Brainrot Unblocked and jump into browser challenges players are replaying.",
  path: "/trending-games",
});

if (trendingGames.length < 2) {
  pageMetadata.robots = {
    index: false,
    follow: true,
  };
}

export const metadata: Metadata = pageMetadata;

export default function TrendingGamesPage() {
  return (
    <ListingPage
      eyebrow="Hot right now"
      title="Trending Games"
      description="A focused list of games currently gaining attention."
      games={trendingGames}
    />
  );
}
