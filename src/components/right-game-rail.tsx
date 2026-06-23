import Link from "next/link";
import type { Game } from "@/src/types/content";
import { AdSlot } from "@/src/components/ad-slot";
import { GameArtwork } from "@/src/components/game-artwork";

interface RightGameRailProps {
  currentSlug?: string;
  games: Game[];
}

export function RightGameRail({ currentSlug, games }: RightGameRailProps) {
  const railGames = games
    .filter((game) => game.slug !== currentSlug)
    .sort((a, b) => Number(Boolean(b.trending)) - Number(Boolean(a.trending)) || b.plays - a.plays)
    .slice(0, 18);

  return (
    <aside className="right-rail" aria-label="Recommended games">
      <AdSlot variant="tower" />
      <div className="right-rail__grid">
        {railGames.map((game, index) => (
          <Link key={game.slug} href={`/games/${game.slug}`} className="right-rail__card">
            <span className={`rail-badge ${game.trending ? "rail-badge--hot" : ""}`}>
              {game.trending ? "Hot" : index % 3 === 0 ? "Top Rated" : "Play"}
            </span>
            <GameArtwork
              accent={game.accent}
              icon={game.icon}
              name={game.name}
              compact
            />
            <span className="right-rail__title">{game.name}</span>
          </Link>
        ))}
      </div>
    </aside>
  );
}
