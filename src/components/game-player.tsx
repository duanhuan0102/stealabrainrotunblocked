"use client";

import { useState } from "react";
import type { Game } from "@/src/types/content";
import { GameArtwork } from "@/src/components/game-artwork";

interface GamePlayerProps {
  game: Game;
  autoStart?: boolean;
}

export function GamePlayer({ game, autoStart = false }: GamePlayerProps) {
  const [started, setStarted] = useState(Boolean(autoStart && game.embedUrl));

  if (started && !game.embedUrl) {
    return (
      <section className="game-player-card" aria-label={`${game.name} game player`}>
        <div className="player-shell integration-placeholder">
          <div>
            <span className="integration-placeholder__icon" aria-hidden="true">
              {game.icon}
            </span>
            <h2>Player integration ready</h2>
            <p>
              Add the game URL to the <code>embedUrl</code> field in{" "}
              <code>src/data/games.ts</code>. The player will load here as soon
              as the page opens when auto start is enabled.
            </p>
            <button className="button button--ghost" type="button" onClick={() => setStarted(false)}>
              Back to cover
            </button>
          </div>
        </div>
        <PlayerToolbar game={game} />
      </section>
    );
  }

  return (
    <section className="game-player-card" aria-label={`${game.name} game player`}>
      <div className="player-shell">
        {started && game.embedUrl ? (
          <iframe
            className="game-frame"
            src={game.embedUrl}
            title={`Play ${game.name}`}
            allow="autoplay; fullscreen; gamepad"
            allowFullScreen
          />
        ) : (
          <>
            <GameArtwork
              accent={game.accent}
              icon={game.icon}
              image={game.image}
              name={game.name}
            />
            <div className="player-shell__overlay">
              <button
                className="play-button"
                type="button"
                onClick={() => setStarted(true)}
              >
                <span className="play-button__icon" aria-hidden="true" />
                Play {game.name}
              </button>
              <p>
                {game.embedUrl
                  ? "Press play to load the browser game."
                  : "This game needs an embed URL before it can be played here."}
              </p>
            </div>
          </>
        )}
      </div>
      <PlayerToolbar game={game} />
    </section>
  );
}

function PlayerToolbar({ game }: { game: Game }) {
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [saved, setSaved] = useState(false);
  const [status, setStatus] = useState("");

  function scrollToSection(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  async function shareGame() {
    const shareData = {
      title: game.name,
      text: game.tagline,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
        setStatus("Shared");
        return;
      }

      await navigator.clipboard.writeText(window.location.href);
      setStatus("Link copied");
    } catch {
      setStatus("Share cancelled");
    }
  }

  return (
    <div className="player-toolbar">
      <h2>{game.name}</h2>
      <div className="player-toolbar__actions" aria-label="Game actions">
        {status ? <span className="player-toolbar__status">{status}</span> : null}
        <button type="button" aria-label="Like game" onClick={() => setLikes((count) => count + 1)}>
          Like {likes}
        </button>
        <button type="button" aria-label="Dislike game" onClick={() => setDislikes((count) => count + 1)}>
          Dislike {dislikes}
        </button>
        <button
          type="button"
          aria-label="Save game"
          aria-pressed={saved}
          className={saved ? "is-active" : undefined}
          onClick={() => setSaved((value) => !value)}
        >
          {saved ? "Saved" : "Save"}
        </button>
        <button type="button" aria-label="Open game guide" onClick={() => scrollToSection("game-guide-title")}>
          Guide
        </button>
        <button type="button" aria-label="Share game" onClick={shareGame}>
          Share
        </button>
        <button type="button" aria-label="Game information" onClick={() => scrollToSection("game-overview-title")}>
          Info
        </button>
      </div>
    </div>
  );
}
