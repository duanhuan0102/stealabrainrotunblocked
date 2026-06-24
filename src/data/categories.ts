import type { Category } from "@/src/types/content";

export const categories: Category[] = [
  {
    slug: "action",
    name: "Action Games",
    description:
      "Fast browser games built around movement, collecting, chasing, and quick tactical decisions.",
    introduction:
      "Action games keep the pressure close. Move through the arena, react to rivals, protect what you have earned, and look for the next opening before the match turns against you.",
    accent: "#ff5a67",
    content: [
      {
        heading: "What to expect from action games",
        paragraphs: [
          "The best action games make every route, pickup, and escape feel immediate. Controls should be readable, goals should stay visible, and short sessions should still leave room for smart decisions.",
          "This category favors browser games with direct movement, quick restarts, and enough pressure to make each run feel different.",
        ],
      },
      {
        heading: "Play with a plan",
        paragraphs: [
          "Good action play is not only about speed. Watch where rivals move, choose safer routes when you are carrying something valuable, and avoid taking risks that leave your own base exposed.",
        ],
        bullets: [
          "Move early instead of reacting late.",
          "Protect valuable pickups before chasing more.",
          "Use each failed run to learn safer routes.",
        ],
      },
    ],
  },
  {
    slug: "arcade",
    name: "Arcade Games",
    description:
      "Quick, replayable browser games built around timing, reflexes, and high scores.",
    introduction:
      "Arcade games are easy to start and difficult to put down. Each round focuses on a clear objective, responsive controls, and the urge to improve your previous score.",
    accent: "#ff7a3d",
    content: [
      {
        heading: "What makes a great arcade game?",
        paragraphs: [
          "The best arcade games explain themselves through play. Movement feels immediate, goals are visible, and every retry teaches you something useful.",
          "Our arcade collection favors short loading times, readable controls, and rounds that work equally well for a quick break or a longer score chase.",
        ],
      },
      {
        heading: "Find your next challenge",
        paragraphs: [
          "Try a rhythm runner for precision, a survival game for endurance, or a classic score attack when you want a direct test of reflexes.",
        ],
        bullets: [
          "Fast restarts and short sessions",
          "Keyboard, mouse, or touch-friendly controls",
          "High-score and mastery-driven objectives",
        ],
      },
    ],
  },
  {
    slug: "puzzle",
    name: "Puzzle Games",
    description:
      "Thoughtful challenges involving logic, patterns, planning, and creative problem solving.",
    introduction:
      "Puzzle games reward curiosity and careful observation. Some can be solved in seconds, while others unfold across many moves and invite experimentation.",
    accent: "#9a78ff",
    content: [
      {
        heading: "Play at your own pace",
        paragraphs: [
          "Most puzzle games let you pause, reconsider, and test an idea without pressure. That makes the category welcoming to new players while leaving room for deep mastery.",
        ],
      },
      {
        heading: "Different kinds of puzzles",
        paragraphs: [
          "The collection includes number puzzles, spatial challenges, physics problems, and compact strategy games. Each game page explains its core rules before you begin.",
        ],
      },
    ],
  },
  {
    slug: "racing",
    name: "Racing Games",
    description:
      "Speed-focused games featuring quick reactions, clean lines, and satisfying vehicle control.",
    introduction:
      "Racing games turn every corner into a small decision. Brake early, take a risky shortcut, or keep your line smooth enough to gain a fraction of a second.",
    accent: "#28c6c1",
    content: [
      {
        heading: "Built for speed",
        paragraphs: [
          "Browser racing games work best when controls remain predictable at high speed. We prioritize titles with responsive steering and clear visual feedback.",
        ],
      },
      {
        heading: "Race, drift, and improve",
        paragraphs: [
          "Choose time trials for focused improvement, traffic runs for reactive play, or drift challenges when style matters as much as finishing first.",
        ],
      },
    ],
  },
  {
    slug: "sports",
    name: "Sports Games",
    description:
      "Browser sports games built around goals, matches, vehicle control, and competitive timing.",
    introduction:
      "Sports games turn simple objectives into quick decisions. Chase the ball, defend space, take the right shot, and use each match to improve your timing.",
    accent: "#27c4ff",
    content: [
      {
        heading: "Fast sports games for the browser",
        paragraphs: [
          "A good browser sports game should make the goal clear within seconds. You need responsive controls, readable arenas, and enough pressure to make every touch or shot feel important.",
          "This category includes games where timing, positioning, and quick recoveries matter as much as raw speed.",
        ],
      },
      {
        heading: "Win with better decisions",
        paragraphs: [
          "Sports games reward players who read the field before they commit. Move early, protect your goal, and attack when the lane is open instead of chasing every play at full speed.",
        ],
        bullets: [
          "Keep the objective in view.",
          "Balance offense with defense.",
          "Use each round to learn cleaner angles.",
        ],
      },
    ],
  },
  {
    slug: "skill",
    name: "Skill Games",
    description:
      "Precision games that reward practice, timing, coordination, and consistent execution.",
    introduction:
      "Skill games reduce the rules and raise the importance of every input. Progress comes from learning patterns, staying calm, and turning practice into consistency.",
    accent: "#f4c95d",
    content: [
      {
        heading: "Practice with a purpose",
        paragraphs: [
          "A fair skill game makes failure readable. You should understand what happened, restart quickly, and have a clear idea of what to try next.",
        ],
      },
      {
        heading: "Small controls, deep mastery",
        paragraphs: [
          "Many games in this category use only one or two controls. Their depth comes from level design, rhythm, changing speed, and the precision required to succeed.",
        ],
      },
    ],
  },
];

export function getCategoryBySlug(slug: string) {
  return categories.find((category) => category.slug === slug);
}
