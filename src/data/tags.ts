import type { GameTag } from "@/src/types/content";

export const tags: GameTag[] = [
  {
    slug: "3d",
    name: "3D",
    description:
      "Browser games with 3D arenas, characters, camera movement, or spatial navigation.",
  },
  {
    slug: "action",
    name: "Action",
    description:
      "Fast games focused on movement, chasing, collecting, and quick reactions.",
  },
  {
    slug: "strategy",
    name: "Strategy",
    description:
      "Games where planning routes, timing upgrades, and choosing risks matters.",
  },
  {
    slug: "sports",
    name: "Sports",
    description:
      "Games built around matches, goals, field position, and competitive timing.",
  },
  {
    slug: "football",
    name: "Football",
    description:
      "American football games focused on running, passing, tackling, and scoring touchdowns.",
  },
  {
    slug: "soccer",
    name: "Soccer",
    description:
      "Soccer and football-inspired games focused on scoring, defending, and ball control.",
  },
  {
    slug: "car",
    name: "Car",
    description:
      "Games where driving, vehicle control, steering, and momentum shape the action.",
  },
  {
    slug: "racing",
    name: "Racing",
    description:
      "Vehicle games focused on speed, clean lines, acceleration, and city or track driving.",
  },
  {
    slug: "adventure",
    name: "Adventure",
    description:
      "Games built around exploration, discovery, open paths, and objective-driven journeys.",
  },
  {
    slug: "educational",
    name: "Educational",
    description:
      "Browser games that introduce learning goals through play, practice, and experimentation.",
  },
  {
    slug: "coding",
    name: "Coding",
    description:
      "Games that include programming ideas, logic triggers, automation, or STEM problem solving.",
  },
  {
    slug: "multiplayer",
    name: "Multiplayer",
    description:
      "Games with competitive or shared-arena play against other players or player-like rivals.",
  },
  {
    slug: "one-button",
    name: "One Button",
    description:
      "Simple controls with challenges built around timing and precision.",
  },
  {
    slug: "clicker",
    name: "Clicker",
    description:
      "Games where repeated clicks, taps, upgrades, and simple resource loops drive progress.",
  },
  {
    slug: "idle",
    name: "Idle",
    description:
      "Incremental games that keep progress moving through upgrades, generators, and passive rewards.",
  },
  {
    slug: "incremental",
    name: "Incremental",
    description:
      "Progression games built around growing numbers, better upgrades, and compounding efficiency.",
  },
  {
    slug: "rhythm",
    name: "Rhythm",
    description:
      "Games where movement, obstacles, or scoring follow a musical beat.",
  },
  {
    slug: "endless",
    name: "Endless",
    description:
      "Replayable runs that continue until your concentration finally slips.",
  },
  {
    slug: "physics",
    name: "Physics",
    description:
      "Games built around momentum, balance, gravity, and physical interactions.",
  },
  {
    slug: "logic",
    name: "Logic",
    description:
      "Puzzles that reward deduction, planning, and recognizing patterns.",
  },
  {
    slug: "drifting",
    name: "Drifting",
    description:
      "Driving games focused on controlled slides and smooth racing lines.",
  },
  {
    slug: "high-score",
    name: "High Score",
    description:
      "Score-chasing games designed for repeated runs and steady improvement.",
  },
  {
    slug: "mobile",
    name: "Mobile Friendly",
    description:
      "Games with controls and layouts suited to phones and tablets.",
  },
];

export function getTagBySlug(slug: string) {
  return tags.find((tag) => tag.slug === slug);
}
