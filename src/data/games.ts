import type { Game } from "@/src/types/content";

export const games: Game[] = [
  {
    slug: "neon-dash",
    name: "Neon Dash",
    tagline: "Jump on the beat and keep the glowing run alive.",
    description:
      "Neon Dash is a fast rhythm platformer where a single mistimed jump ends the run. Learn each pattern, follow the music, and chase a cleaner finish.",
    instructions: [
      "Press Space, click, or tap to jump.",
      "Hold briefly to extend jumps when the level allows it.",
      "Restart quickly and use the music to anticipate obstacles.",
    ],
    content: [
      {
        heading: "How to play Neon Dash",
        paragraphs: [
          "Your runner moves forward automatically. Your only job is to jump over spikes, gaps, and moving hazards without losing the rhythm of the level.",
          "Early sections teach the visual language of each obstacle. Later sequences combine those ideas at higher speed, so consistency matters more than frantic input.",
        ],
      },
      {
        heading: "Tips for a smoother run",
        paragraphs: [
          "Watch the space ahead of your character instead of focusing on the character itself. This gives you more time to read the next landing.",
        ],
        bullets: [
          "Use short taps for narrow platforms.",
          "Let the soundtrack guide repeated jump patterns.",
          "Take a short break when repeated attempts become less consistent.",
        ],
      },
    ],
    category: "arcade",
    tags: ["one-button", "rhythm", "high-score", "mobile"],
    accent: "#ff5a67",
    icon: "N",
    developer: "Template Studio",
    technology: "HTML5",
    platforms: ["Desktop", "Mobile", "Tablet"],
    publishedAt: "2026-04-12",
    updatedAt: "2026-06-10",
    featured: true,
    trending: true,
    plays: 0,
    embedUrl: "/embed/neon-dash.html",
  },
  {
    slug: "orbit-shift",
    name: "Orbit Shift",
    tagline: "Switch lanes in orbit and survive the rotating tunnel.",
    description:
      "Orbit Shift is a compact one-button arcade template. Swap between two orbital lanes, dodge incoming gates, and keep the run alive as the tunnel speeds up.",
    instructions: [
      "Press Space, click, or tap to switch orbit lanes.",
      "Avoid red gates as they rotate toward the center.",
      "Collect cyan rings when the path is safe.",
    ],
    content: [
      {
        heading: "How to play Orbit Shift",
        paragraphs: [
          "The ship moves around the center automatically. Each input changes between the inner and outer orbit, so timing matters more than repeated tapping.",
          "The safest move is often an early lane change. Watch the next gate as it appears and decide before it reaches your ship.",
        ],
      },
      {
        heading: "Template notes",
        paragraphs: [
          "This second game exists so the template shows recommendations, right rail cards, and multi-game SEO routes while still staying small enough to reuse.",
        ],
        bullets: [
          "Replace the embed file with your own HTML5 game.",
          "Keep descriptions, instructions, and guide sections unique.",
          "Only add ratings or play counts when you have real data.",
        ],
      },
    ],
    category: "skill",
    tags: ["one-button", "endless", "high-score", "mobile"],
    accent: "#51d8ff",
    icon: "O",
    developer: "Template Studio",
    technology: "HTML5",
    platforms: ["Desktop", "Mobile", "Tablet"],
    publishedAt: "2026-06-16",
    updatedAt: "2026-06-16",
    plays: 0,
    embedUrl: "/embed/orbit-shift.html",
  },
];

export function getGameBySlug(slug: string) {
  return games.find((game) => game.slug === slug);
}

export function getGamesByCategory(category: string) {
  return games.filter((game) => game.category === category);
}

export function getGamesByTag(tag: string) {
  return games.filter((game) => game.tags.includes(tag));
}

export function getFeaturedGames() {
  return games.filter((game) => game.featured);
}

export function getTrendingGames() {
  return [...games]
    .filter((game) => game.trending)
    .sort((a, b) => b.plays - a.plays);
}

export function getPopularGames() {
  return [...games].sort((a, b) => b.plays - a.plays);
}

export function getNewGames() {
  return [...games].sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime(),
  );
}

export function getRelatedGames(game: Game, limit = 4) {
  return games
    .filter((candidate) => candidate.slug !== game.slug)
    .map((candidate) => {
      const sharedTags = candidate.tags.filter((tag) =>
        game.tags.includes(tag),
      ).length;
      const categoryScore = candidate.category === game.category ? 3 : 0;
      return { game: candidate, score: sharedTags + categoryScore };
    })
    .sort((a, b) => b.score - a.score || b.game.plays - a.game.plays)
    .slice(0, limit)
    .map(({ game: relatedGame }) => relatedGame);
}
