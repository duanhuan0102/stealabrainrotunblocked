import Link from "next/link";
import type { Game } from "@/src/types/content";
import { formatCompactNumber } from "@/src/lib/format";

interface RankListProps {
  games: Game[];
}

export function RankList({ games }: RankListProps) {
  return (
    <ol className="rank-list">
      {games.map((game, index) => (
        <li key={game.slug}>
          <span className="rank-list__number">{String(index + 1).padStart(2, "0")}</span>
          <span
            className="rank-list__icon"
            style={{ backgroundColor: game.accent }}
            aria-hidden="true"
          >
            {game.icon}
          </span>
          <span className="rank-list__copy">
            <Link href={`/games/${game.slug}`}>{game.name}</Link>
            <small>{formatCompactNumber(game.plays)} plays</small>
          </span>
          <span className="rank-list__arrow" aria-hidden="true">↗</span>
        </li>
      ))}
    </ol>
  );
}
