const configuredUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://stealabrainrotunblocked.org";

export const siteConfig = {
  name: "Steal A Brainrot Unblocked",
  shortName: "SB",
  url: configuredUrl,
  description:
    "Play Steal A Brainrot Unblocked online for free. Load the 3D browser game, learn the controls, and raid rival bases with no download.",
  locale: "en_US",
  language: "en",
  email: "duanhuan0102@gmail.com",
  copyrightStartYear: 2026,
  navigation: [
    { label: "Play Game", href: "/games/steal-a-brainrot-unblocked" },
    { label: "Action", href: "/categories/action" },
    { label: "About", href: "/about" },
  ],
} as const;

export const seoConfig = {
  minGamesForIndexableTag: 2,
} as const;
