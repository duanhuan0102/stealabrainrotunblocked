import type { Game } from "@/src/types/content";

export const games: Game[] = [
  {
    slug: "steal-a-brainrot-unblocked",
    name: "Steal A Brainrot Unblocked",
    tagline:
      "Raid rival bases, carry brainrots home, and grow your 3D collection online.",
    description:
      "Steal A Brainrot Unblocked is a free online 3D action game where you raid rival bases, carry brainrots home, guard your collection, and upgrade for bigger runs.",
    instructions: [
      "Use WASD or the arrow keys to move through the 3D arena.",
      "Enter a rival base, grab a valuable brainrot, and carry it back to your own base.",
      "Watch for rivals, traps, and blocked paths while you protect your collection.",
      "Spend earned cash on stronger brainrots and upgrades whenever the game offers them.",
    ],
    content: [
      {
        heading: "Play Steal A Brainrot Unblocked online",
        paragraphs: [
          "Steal A Brainrot Unblocked drops you into a colorful 3D arena where collecting is only half the job. You need to find a target, steal a brainrot, and get back to your base before another player cuts off the route.",
          "This browser version uses the live Unity WebGL build from 8Games.net, so there is no download and no local game package stored in this project. Open the page, load the iframe, and start playing the Steal A Brainrot game unblocked from the browser.",
        ],
      },
      {
        heading: "How the raid loop works",
        paragraphs: [
          "Each run is about balancing risk and reward. A valuable brainrot is worth chasing, but carrying it makes the return trip more dangerous because rivals can react before you reach safety.",
          "Move through open lanes, watch base entrances, and decide when to retreat. The best runs usually come from stealing at the right moment instead of rushing straight into the busiest area.",
          "If you are using this as a Steal A Brainrot game unblocked page, focus on learning one reliable route first. A familiar path gives you more time to react when another player moves toward your base or when a safer target appears.",
        ],
        bullets: [
          "Scout the path before grabbing a target.",
          "Return to your base quickly after a successful steal.",
          "Keep an eye on your own collection while you look for the next raid.",
        ],
      },
      {
        heading: "Tips for free online play",
        paragraphs: [
          "Players searching for Steal A Brainrot online or an unblocked Steal A Brainrot game usually want quick access and clear controls. Start with safer targets, learn where rivals tend to gather, and save upgrades for the brainrots that help your base earn faster.",
          "The free online version works best when you treat each attempt as practice. Do not chase every expensive brainrot immediately. Watch how the arena opens, wait for a clean gap, and return home before the route becomes crowded.",
        ],
        bullets: [
          "Use the camera angle to read paths before committing.",
          "Avoid carrying a stolen brainrot through crowded lanes.",
          "Upgrade steadily instead of spending everything on one risky run.",
        ],
      },
      {
        heading: "Controls and device notes",
        paragraphs: [
          "Steal A Brainrot Unblocked runs as a Unity WebGL browser game, so performance can depend on the device and network. Desktop browsers usually give the smoothest control, especially when you need quick movement during a steal.",
          "Mobile and tablet play may still work, but loading can take longer and touch controls may feel different from keyboard movement. If the game frame does not respond right away, tap inside the player once and give the WebGL build a moment to finish loading.",
        ],
      },
      {
        heading: "Strategy for safer steals",
        paragraphs: [
          "A strong run starts before you grab anything. Look at the rival base, check the lane back to your own area, and decide whether the target is worth the risk. A small successful steal is usually better than losing a rare brainrot in the open.",
          "When you are carrying something valuable, avoid the busiest route. Use side paths when they are clear, keep moving, and do not stop near rival entrances. The goal is to turn each steal into steady progress instead of one risky highlight.",
        ],
        bullets: [
          "Take easy targets while learning the arena.",
          "Retreat when too many rivals gather near the same base.",
          "Use upgrades to make later steals easier to protect.",
        ],
      },
    ],
    category: "action",
    tags: ["3d", "action", "strategy", "mobile"],
    accent: "#ffb02e",
    icon: "B",
    developer: "8Games.net",
    technology: "Unity WebGL",
    platforms: ["Desktop", "Mobile", "Tablet"],
    publishedAt: "2026-06-24",
    updatedAt: "2026-06-24",
    featured: true,
    trending: true,
    plays: 0,
    image: "/images/games/steal-a-brainrot-unblocked-cover.webp",
    embedUrl: "https://st.8games.net/9/8g/igra-ukradi-brejnrot-original-3d/",
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
