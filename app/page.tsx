import { AdSlot } from "@/src/components/ad-slot";
import { ArcadeLayout } from "@/src/components/arcade-layout";
import { ContentSections } from "@/src/components/content-sections";
import { GameOverview } from "@/src/components/game-overview";
import { GamePlayer } from "@/src/components/game-player";
import { GameStrip } from "@/src/components/game-strip";
import { JsonLd } from "@/src/components/json-ld";
import { siteConfig } from "@/src/config/site";
import {
  games,
  getFeaturedGames,
  getNewGames,
  getPopularGames,
} from "@/src/data/games";

export default function HomePage() {
  const featured = getFeaturedGames();
  const heroGame = featured.find((game) => game.embedUrl) ?? featured[0] ?? games[0];
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
  ];

  return (
    <main>
      <JsonLd data={structuredData} />
      <ArcadeLayout currentSlug={heroGame.slug} games={games}>
        <GamePlayer game={heroGame} autoStart />

        <AdSlot />

        {popularGames.length > 0 ? (
          <GameStrip games={popularGames} label="Popular games" />
        ) : null}

        <GameOverview game={heroGame} />

        <section className="portal-content-panel" aria-labelledby="game-guide-title">
          <div className="portal-section-heading">
            <p className="eyebrow">Guide</p>
            <h2 id="game-guide-title">Play {heroGame.name} online</h2>
            <p>{heroGame.tagline}</p>
          </div>
          <ContentSections sections={heroGame.content} />
        </section>

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
