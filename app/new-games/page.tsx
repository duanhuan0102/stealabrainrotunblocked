import type { Metadata } from "next";
import { ListingPage } from "@/src/components/listing-page";
import { getNewGames } from "@/src/data/games";
import { createMetadata } from "@/src/lib/seo";

const newGames = getNewGames();

const pageMetadata = createMetadata({
  title: "New Games - Fresh Browser Games",
  description:
    "Play the newest browser games added to Steal A Brainrot Unblocked, including free online games with clear controls and no downloads.",
  path: "/new-games",
});

if (newGames.length < 2) {
  pageMetadata.robots = {
    index: false,
    follow: true,
  };
}

export const metadata: Metadata = pageMetadata;

export default function NewGamesPage() {
  return (
    <ListingPage
      eyebrow="Recently added"
      title="New Games"
      description="Fresh releases and recent additions, ordered by publication date."
      games={newGames}
    />
  );
}
