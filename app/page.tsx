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
  title: "Steal A Brainrot Unblocked - Play Online Free",
  description:
    "Play Steal A Brainrot Unblocked online for free in your browser. Start the game instantly with no download, then explore more free games.",
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
            <p>
              Play Steal A Brainrot Unblocked online for free in your browser.
              Start the game instantly with no download, then explore more free
              games below.
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
            <h2 id="game-guide-title">Start the browser game</h2>
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
