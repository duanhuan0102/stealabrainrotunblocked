import type { Metadata } from "next";
import { ListingPage } from "@/src/components/listing-page";
import { games } from "@/src/data/games";
import { createMetadata } from "@/src/lib/seo";

const allGames = [...games].sort((a, b) => b.plays - a.plays);

export const metadata: Metadata = createMetadata({
  title: "All Games - Free Browser Games",
  description:
    "Browse every free browser game on Steal A Brainrot Unblocked, including quick-play game pages, controls, guides, and no-download online games.",
  path: "/games",
});

export default function GamesPage() {
  return (
    <ListingPage
      eyebrow="Game library"
      title="All Games"
      description="Browse every available browser game from one index page."
      games={allGames}
    />
  );
}
