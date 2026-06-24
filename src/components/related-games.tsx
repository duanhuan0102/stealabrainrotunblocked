import type { CSSProperties } from "react";

const relatedGames = [
  {
    name: "Brainrot Clicker",
    category: "Clicker",
    status: "Coming soon",
    accent: "#ff4f6d",
  },
  {
    name: "Italian Brainrot",
    category: "Funny",
    status: "Coming soon",
    accent: "#35d07f",
  },
  {
    name: "Steal Brainrot Duel",
    category: "Action",
    status: "Coming soon",
    accent: "#7c5cff",
  },
  {
    name: "Ragdoll Archers",
    category: "Skill",
    status: "Coming soon",
    accent: "#f5c84b",
  },
  {
    name: "Space Waves",
    category: "Arcade",
    status: "Coming soon",
    accent: "#3ed7ff",
  },
  {
    name: "Slope Game",
    category: "Runner",
    status: "Coming soon",
    accent: "#a7ff5a",
  },
];

export function RelatedGames() {
  return (
    <section className="home-section" aria-labelledby="related-games-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow">More games</p>
          <h2 id="related-games-title">Related Games</h2>
          <p>
            More browser games can be added here as the game box expands.
          </p>
        </div>
      </div>

      <div className="related-games-grid">
        {relatedGames.map((game) => (
          <article className="related-game-card" key={game.name}>
            <div
              className="related-game-card__art"
              style={{ "--related-accent": game.accent } as CSSProperties}
              aria-hidden="true"
            >
              <span>{game.name.charAt(0)}</span>
            </div>
            <div className="related-game-card__body">
              <h3>{game.name}</h3>
              <p>{game.category}</p>
              <span>{game.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
