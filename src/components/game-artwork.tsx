import Image from "next/image";
import type { CSSProperties } from "react";

interface GameArtworkProps {
  accent: string;
  icon: string;
  image?: string;
  name: string;
  compact?: boolean;
}

export function GameArtwork({
  accent,
  icon,
  image,
  name,
  compact = false,
}: GameArtworkProps) {
  const style = { "--art-accent": accent } as CSSProperties;
  const className = [
    "game-artwork",
    compact ? "game-artwork--compact" : "",
    image ? "game-artwork--image" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      style={style}
      role="img"
      aria-label={`${name} game artwork`}
    >
      {image ? (
        <Image
          className="game-artwork__image"
          src={image}
          alt=""
          width={compact ? 320 : 1200}
          height={compact ? 180 : 675}
          sizes={compact ? "(max-width: 768px) 42vw, 220px" : "100vw"}
        />
      ) : null}
      <span className="game-artwork__grid" aria-hidden="true" />
      <span className="game-artwork__icon" aria-hidden="true">
        {icon}
      </span>
      <span className="game-artwork__name">{name}</span>
    </div>
  );
}
