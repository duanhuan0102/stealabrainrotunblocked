import type { Metadata } from "next";
import { AdSlot } from "@/src/components/ad-slot";
import { ArcadeLayout } from "@/src/components/arcade-layout";
import { ContentSections } from "@/src/components/content-sections";
import { FAQ, FAQ_ITEMS } from "@/src/components/faq";
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
import type { ContentSection } from "@/src/types/content";

const homepageGameSlug = "steal-a-brainrot-unblocked";
const homepageImage = "/images/games/steal-a-brainrot-unblocked-cover.webp";

const homepageSections: ContentSection[] = [
  {
    heading: "Play Steal A Brainrot Unblocked online",
    paragraphs: [
      "Steal A Brainrot Unblocked is the main game this page is built around. Load the 3D arena, move through rival bases, steal brainrots, and bring them back before another player interrupts your run.",
      "This homepage is the direct access point for players who want to play Steal A Brainrot Unblocked online for free with no download. The embedded game loads in the browser and keeps the focus on fast entry, clear controls, and practical tips.",
    ],
  },
  {
    heading: "Why players search for Steal A Brainrot Unblocked",
    paragraphs: [
      "Most players looking for Steal A Brainrot Unblocked want a page that opens fast, explains the controls, and keeps the game one click away. This page is organized around that unblocked game intent instead of sending you through extra menus.",
      "If the external game frame is blocked by a school, work, or public network, refresh once, try another browser, or return from a different connection. The Steal A Brainrot Unblocked game itself is served from an external Unity WebGL source.",
    ],
    bullets: [
      "Free online access to Steal A Brainrot Unblocked through the browser.",
      "3D action gameplay with stealing, escaping, and base defense.",
      "No local install or download required.",
    ],
  },
  {
    heading: "How to play Steal A Brainrot Unblocked better",
    paragraphs: [
      "Start each Steal A Brainrot Unblocked run with safer steals while you learn the map. The fastest route is not always the best route, especially when another player is watching the same base entrance.",
      "A steady run usually works better than a rushed one. Pick a target, check the return path, and only grab the brainrot when you already know where you will escape.",
    ],
    bullets: [
      "Scout the path before picking up a valuable brainrot.",
      "Return to your base quickly after a successful steal.",
      "Spend upgrades carefully so each run becomes easier to defend.",
    ],
  },
  {
    heading: "Best way to use this Steal A Brainrot Unblocked page",
    paragraphs: [
      "Use this page as your Steal A Brainrot Unblocked start page. The player is placed at the top, the most important controls are explained below it, and the FAQ covers the common loading problems that happen with browser embeds.",
      "Because the game runs through an external Unity WebGL iframe, loading speed can depend on the browser, network, and device. Desktop browsers usually give the smoothest experience, while mobile play may take longer to start on older phones or tablets.",
    ],
  },
  {
    heading: "What makes Steal A Brainrot Unblocked replayable",
    paragraphs: [
      "The Steal A Brainrot Unblocked loop is simple enough to understand quickly: enter the arena, steal a brainrot, return it to your base, and improve your setup for the next run. The replay value comes from timing those decisions while other players and hazards make each route less predictable.",
      "That is why the unblocked version works well as a short-session online game. You can play one quick raid, practice a safer route, or keep trying for a stronger collection without installing a separate app.",
    ],
  },
];

export const metadata: Metadata = createMetadata({
  title: "Steal A Brainrot Unblocked - Play Online Free",
  description:
    "Play Steal A Brainrot Unblocked online for free. Raid rival bases, steal brainrots, protect your collection, and load the 3D game in your browser.",
  path: "/",
  image: homepageImage,
});

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
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQ_ITEMS.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
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
            <h1 id="home-game-title">{heroGame.name}</h1>
            <p>{heroGame.description}</p>
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
            <p className="eyebrow">Main guide</p>
            <h2 id="game-guide-title">Steal A Brainrot Unblocked online</h2>
            <p>Fast access, clear controls, and homepage-focused tips for the browser version.</p>
          </div>
          <ContentSections sections={homepageSections} />
        </section>

        <FAQ />

        <AdSlot />

        {popularGames.length > 0 ? (
          <GameStrip games={popularGames} label="Popular games" />
        ) : null}

        {newGames.length > 0 ? (
          <section className="portal-content-panel" aria-labelledby="new-games-title">
            <div className="portal-section-heading">
              <p className="eyebrow">Fresh picks</p>
              <h2 id="new-games-title">Newest games</h2>
              <p>More browser games you can open from the same layout.</p>
            </div>
            <GameStrip games={newGames} label="Newest games" />
          </section>
        ) : null}
      </ArcadeLayout>
    </main>
  );
}
