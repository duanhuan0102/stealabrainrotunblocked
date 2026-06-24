export const STEAL_A_BRAINROT_GAME_URL =
  "https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/";

interface GameFrameProps {
  src?: string;
  title?: string;
}

export function GameFrame({
  src = STEAL_A_BRAINROT_GAME_URL,
  title = "Steal a Brainrot Unblocked",
}: GameFrameProps) {
  return (
    <div className="game-frame-card">
      <div className="game-frame-card__topbar">
        <div>
          <p className="eyebrow">Now playing</p>
          <h2>{title}</h2>
        </div>
        <span>Unity WebGL</span>
      </div>
      <div className="game-frame-card__viewport">
        <iframe
          className="game-frame-card__iframe"
          src={src}
          title={`Play ${title}`}
          allow="autoplay; fullscreen; gamepad; clipboard-read; clipboard-write"
          allowFullScreen
          loading="eager"
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <p className="game-frame-card__fallback">
        If the game does not load, please refresh the page or try again later.
      </p>
    </div>
  );
}
