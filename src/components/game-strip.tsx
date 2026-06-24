import Link from "next/link";
import type { Game } from "@/src/types/content";
import { GameArtwork } from "@/src/components/game-artwork";

interface GameStripProps {
  games: Game[];
  label: string;
}

export function GameStrip({ games, label }: GameStripProps) {
  if (games.length === 0) {
    return null;
  }

  return (
    <section className="game-strip" aria-label={label}>
      <div className="game-strip__grid">
        {games.map((game) => (
          <Link key={game.slug} href={`/games/${game.slug}`} className="game-strip__card">
            <GameArtwork
              accent={game.accent}
              icon={game.icon}
              image={game.image}
              name={game.name}
              compact
            />
            <span>{game.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
