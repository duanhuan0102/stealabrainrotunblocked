import type { CSSProperties } from "react";

interface GameArtworkProps {
  accent: string;
  icon: string;
  name: string;
  compact?: boolean;
}

export function GameArtwork({
  accent,
  icon,
  name,
  compact = false,
}: GameArtworkProps) {
  const style = { "--art-accent": accent } as CSSProperties;

  return (
    <div
      className={`game-artwork${compact ? " game-artwork--compact" : ""}`}
      style={style}
      role="img"
      aria-label={`${name} game artwork`}
    >
      <span className="game-artwork__grid" aria-hidden="true" />
      <span className="game-artwork__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="game-artwork__name">{name}</span>
    </div>
  );
}
