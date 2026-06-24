import type { Metadata } from "next";
import { ListingPage } from "@/src/components/listing-page";
import { getPopularGames } from "@/src/data/games";
import { createMetadata } from "@/src/lib/seo";

const popularGames = getPopularGames();

const pageMetadata = createMetadata({
  title: "Popular Games - Most Played Online",
  description:
    "Discover the most-played free online games on Steal A Brainrot Unblocked, including browser games with quick access and useful guides.",
  path: "/popular-games",
});

if (popularGames.length < 2) {
  pageMetadata.robots = {
    index: false,
    follow: true,
  };
}

export const metadata: Metadata = pageMetadata;

export default function PopularGamesPage() {
  return (
    <ListingPage
      eyebrow="Player favorites"
      title="Popular Games"
      description="The games with the most plays across the site."
      games={popularGames}
    />
  );
}
