import type { Metadata } from "next";
import { ListingPage } from "@/src/components/listing-page";
import { getNewGames } from "@/src/data/games";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "New Games - Fresh Browser Games",
  description:
    "Play the newest free browser games added to ArcadeForge, with clear controls, useful guides, and no downloads.",
  path: "/new-games",
});

export default function NewGamesPage() {
  return (
    <ListingPage
      eyebrow="Recently added"
      title="New Games"
      description="Fresh releases and recent additions, ordered by publication date."
      games={getNewGames()}
    />
  );
}
