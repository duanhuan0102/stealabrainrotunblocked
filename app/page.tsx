import type { Metadata } from "next";
import Link from "next/link";
import { AdSlot } from "@/src/components/ad-slot";
import { ArcadeLayout } from "@/src/components/arcade-layout";
import { GamePlayer } from "@/src/components/game-player";
import { GameStrip } from "@/src/components/game-strip";
import { JsonLd } from "@/src/components/json-ld";
import { siteConfig } from "@/src/config/site";
import {
  games,
  getFeaturedGames,
  getGameBySlug,
  getNewGames,
  getPopularGames,
} from "@/src/data/games";
import { absoluteUrl, createMetadata } from "@/src/lib/seo";

const homepageGameSlug = "steal-a-brainrot-unblocked";
const homepageImage = "/images/games/steal-a-brainrot-unblocked-cover.webp";

export const metadata: Metadata = createMetadata({
  title: "Steal A Brainrot Unblocked - Play the 3D Game",
  description:
    "Play Steal A Brainrot Unblocked in your browser with the game on this page, clear controls, safer raid tips, and no download or sign-up.",
  path: "/",
  image: homepageImage,
});

const homepageGuide = [
  {
    id: "steal-a-brainrot-unblocked-guide",
    eyebrow: "Game guide",
    title: "Steal A Brainrot Unblocked gameplay guide",
    paragraphs: [
      "The playable frame above is the main experience on this page. Load the 3D arena, click inside the player so the browser sends keyboard input to the game, then start looking for a rival base with a route you can safely enter and leave.",
      "A good run is not only about grabbing the most expensive target. The safer choice is often a lower-value brainrot with a clean path back to your base. Once you understand where players gather, which entrances are risky, and how long the return trip takes, bigger steals become easier to protect.",
    ],
  },
  {
    id: "how-to-play",
    eyebrow: "First run",
    title: "How to play from this page",
    paragraphs: [
      "Start by waiting for the Unity WebGL game to finish loading. If the frame looks ready but the character does not move, click once inside the player before pressing movement keys. Desktop and Chromebook browsers usually feel best because the game rewards quick turns and steady camera control.",
      "Use movement to scout before you commit. Enter a rival area only after you can see a return lane, then move directly back instead of stopping in the open. If another player turns toward you, avoid the busiest path and take the route that gives you the most space to correct mistakes.",
    ],
  },
  {
    id: "controls",
    eyebrow: "Controls",
    title: "Controls and device notes",
    paragraphs: [
      "Most builds use keyboard movement such as WASD or the arrow keys, with the exact prompts shown inside the game frame. The important first step is focus: browser games inside iframes often ignore keys until the player has been clicked or tapped once.",
      "Phones and tablets may load the game, but a 3D stealing game is easier when you can see the whole lane and react without covering the screen. If you play on mobile, rotate to landscape, close extra tabs, and give the WebGL frame a few seconds before judging performance.",
    ],
  },
  {
    id: "strategy",
    eyebrow: "Strategy",
    title: "Safer raid strategy",
    paragraphs: [
      "Treat every steal as two decisions: whether the target is worth taking, and whether the return path is still open. Many failed runs happen because the first decision is exciting and the second decision is ignored. Check the route home before you grab anything valuable.",
      "When you are carrying a brainrot, do not drift near rival entrances or pause in the middle of a lane. Keep moving, turn early, and choose open space over the shortest line if the direct route is crowded. Small successful raids build progress more reliably than one risky attempt that ends before you reach base.",
    ],
  },
  {
    id: "unblocked-access",
    eyebrow: "Access",
    title: "Unblocked browser access",
    paragraphs: [
      "This page is built as a browser play page instead of a download page. The game loads in an embedded player, while the surrounding page keeps the controls, tips, and related games available without sending you through another landing page first.",
      "Access can still depend on the network you are using. A school, work, or public connection may block third-party game files even when this page itself loads normally. If the game stalls, refresh once, try a modern browser, and make sure the iframe is allowed to finish loading before switching away.",
    ],
  },
  {
    id: "page-features",
    eyebrow: "On-page play",
    title: "What this page includes",
    paragraphs: [
      "The homepage is meant to work as the play page, not only as a doorway to another URL. The game player appears before the guide, and the support text explains loading, controls, route planning, and basic troubleshooting for the same game shown above.",
      "Keeping the player and guide together helps players act on advice immediately. You can read a short tip, return to the frame, test the route, then scroll back for the next section without losing the session or opening a separate instruction page.",
    ],
  },
  {
    id: "common-problems",
    eyebrow: "Troubleshooting",
    title: "If the game does not respond",
    paragraphs: [
      "First, click inside the game frame and try the movement keys again. If that does not work, wait a little longer because larger WebGL games can show a loaded screen before every asset is ready. A slow network can make this gap feel like the game is frozen.",
      "If the frame remains blank, refresh the page once and avoid pressing several controls while the game is still loading. Some restricted networks block external game hosts, so a different browser profile, home connection, or allowed network may be needed when the page loads but the embedded game files do not.",
    ],
  },
  {
    id: "why-players-search",
    eyebrow: "Intent",
    title: "Why players search for this game",
    paragraphs: [
      "Players usually look for this title because they want quick access to the 3D raid loop: find a target, steal it, return home, and protect the collection. The page answers that intent by putting the player first and supporting it with practical guidance instead of only listing a link.",
      "The game also fits short sessions. You can run a few raids, test a safer route, or practice defending your own base without installing a client. That makes the browser version useful for players who want fast play, simple loading, and enough context to improve after the first attempt.",
    ],
  },
  {
    id: "faq",
    eyebrow: "FAQ",
    title: "Quick answers before playing",
    paragraphs: [
      "Is the game free? Yes, the page is set up for free browser play. You do not need to download a local installer from this site, and the game frame opens directly above the guide.",
      "What should beginners do first? Learn one dependable route before chasing rare targets. A familiar path gives you more time to react, especially when another player blocks a direct return or moves toward your base.",
      "Why does the player take time to start? Unity WebGL games can be heavier than simple HTML5 games, so the first load may need extra time for scripts and assets. Keep the tab active until the frame responds.",
    ],
  },
];

export default function HomePage() {
  const featured = getFeaturedGames();
  const heroGame =
    getGameBySlug(homepageGameSlug) ??
    featured.find((game) => game.embedUrl) ??
    featured[0] ??
    games[0];
  const popularGames = getPopularGames()
    .filter((game) => game.slug !== heroGame.slug)
    .slice(0, 12);
  const newGames = getNewGames()
    .filter((game) => game.slug !== heroGame.slug)
    .slice(0, 12);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.url,
      description: siteConfig.description,
      inLanguage: siteConfig.language,
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      email: siteConfig.email,
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      name: heroGame.name,
      url: siteConfig.url,
      description: heroGame.description,
      image: absoluteUrl(homepageImage),
      applicationCategory: "GameApplication",
      operatingSystem: "Any",
      author: {
        "@type": "Organization",
        name: heroGame.developer,
      },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        availability: "https://schema.org/InStock",
      },
      datePublished: heroGame.publishedAt,
      dateModified: heroGame.updatedAt,
    },
  ];

  return (
    <main>
      <JsonLd data={structuredData} />
      <ArcadeLayout currentSlug={heroGame.slug} games={games}>
        <GamePlayer game={heroGame} autoStart />

        <section className="portal-content-panel" aria-labelledby="home-game-title">
          <div className="portal-section-heading">
            <p className="eyebrow">Play now</p>
            <h1 id="home-game-title">Steal A Brainrot Unblocked Online</h1>
            <p>
              Play the 3D browser game directly on this page. Load the arena,
              raid rival bases, carry brainrots home, and use the guide below
              to learn safer routes before you chase bigger rewards.
            </p>
          </div>
          <div className="overview-tags" aria-label="Homepage highlights">
            <span>Free online</span>
            <span>3D action</span>
            <span>No download</span>
            <span>Unity WebGL</span>
          </div>
        </section>

        <section className="portal-content-panel" aria-labelledby="game-guide-title">
          <div className="portal-section-heading">
            <p className="eyebrow">How to start</p>
            <h2 id="game-guide-title">Start the 3D browser game</h2>
            <p>
              Click inside the player, wait for the 3D arena to load, then use
              keyboard movement to raid rival bases, carry a brainrot back, and
              protect your own collection.
            </p>
            <Link className="button button--ghost" href="/games/steal-a-brainrot-unblocked">
              Controls & guide
            </Link>
          </div>
        </section>

        <AdSlot />

        {homepageGuide.map((section) => (
          <section
            key={section.id}
            className="portal-content-panel"
            aria-labelledby={`${section.id}-title`}
          >
            <div className="portal-section-heading">
              <p className="eyebrow">{section.eyebrow}</p>
              <h2 id={`${section.id}-title`}>{section.title}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {popularGames.length > 0 ? (
          <GameStrip games={popularGames} label="Popular games" />
        ) : null}

        {newGames.length > 0 ? (
          <section className="portal-content-panel" aria-labelledby="new-games-title">
            <div className="portal-section-heading">
              <p className="eyebrow">Fresh picks</p>
              <h2 id="new-games-title">Newest browser games</h2>
              <p>
                More quick-play games you can open from the same layout after
                finishing a raid session.
              </p>
            </div>
            <GameStrip games={newGames} label="Newest games" />
          </section>
        ) : null}
      </ArcadeLayout>
    </main>
  );
}
