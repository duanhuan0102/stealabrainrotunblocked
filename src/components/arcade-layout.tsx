import type { ReactNode } from "react";
import type { Game } from "@/src/types/content";
import { RightGameRail } from "@/src/components/right-game-rail";

interface ArcadeLayoutProps {
  children: ReactNode;
  currentSlug?: string;
  games: Game[];
}

export function ArcadeLayout({ children, currentSlug, games }: ArcadeLayoutProps) {
  const hasRailGames = games.some((game) => game.slug !== currentSlug);

  return (
    <div className={`arcade-layout${hasRailGames ? "" : " arcade-layout--single"}`}>
      <div className="arcade-layout__main">{children}</div>
      {hasRailGames ? (
        <RightGameRail currentSlug={currentSlug} games={games} />
      ) : null}
    </div>
  );
}
