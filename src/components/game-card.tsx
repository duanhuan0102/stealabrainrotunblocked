import Link from "next/link";
import type { Game } from "@/src/types/content";
import { formatCompactNumber } from "@/src/lib/format";
import { GameArtwork } from "@/src/components/game-artwork";

interface GameCardProps {
  game: Game;
  priority?: boolean;
}

export function GameCard({ game }: GameCardProps) {
  return (
    <article className="game-card">
      <Link
        href={`/games/${game.slug}`}
        className="game-card__art-link"
        aria-label={`Play ${game.name}`}
      >
        <GameArtwork
          accent={game.accent}
          icon={game.icon}
          image={game.image}
          name={game.name}
          compact
        />
        <span className="game-card__play" aria-hidden="true">
          <span className="game-card__play-icon" />
        </span>
      </Link>
      <div className="game-card__body">
        <div>
          <h3 className="game-card__title">
            <Link href={`/games/${game.slug}`}>{game.name}</Link>
          </h3>
          <p className="game-card__tagline">{game.tagline}</p>
        </div>
        <div className="game-card__meta">
          <span>{formatCompactNumber(game.plays)} plays</span>
          {game.rating ? <span>Rating {game.rating.toFixed(1)}</span> : null}
        </div>
      </div>
    </article>
  );
}
