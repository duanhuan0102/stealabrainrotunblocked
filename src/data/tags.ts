import type { GameTag } from "@/src/types/content";

export const tags: GameTag[] = [
  {
    slug: "one-button",
    name: "One Button",
    description:
      "Simple controls with challenges built around timing and precision.",
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
