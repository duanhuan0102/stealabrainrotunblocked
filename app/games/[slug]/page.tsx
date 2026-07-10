import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { AdSlot } from "@/src/components/ad-slot";
import { ArcadeLayout } from "@/src/components/arcade-layout";
import { ContentSections } from "@/src/components/content-sections";
import { GameOverview } from "@/src/components/game-overview";
import { GamePlayer } from "@/src/components/game-player";
import { GameStrip } from "@/src/components/game-strip";
import { JsonLd } from "@/src/components/json-ld";
import { RaidPlanner } from "@/src/components/raid-planner";
import { siteConfig } from "@/src/config/site";
import { getCategoryBySlug } from "@/src/data/categories";
import { games, getGameBySlug, getRelatedGames } from "@/src/data/games";
import { absoluteUrl, createMetadata } from "@/src/lib/seo";

interface GamePageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return games.map((game) => ({ slug: game.slug }));
}

const standaloneTitleAfter = "2026-07-08";

export async function generateMetadata({
  params,
}: GamePageProps): Promise<Metadata> {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    return {};
  }

  return createMetadata({
    title:
      game.slug === "steal-a-brainrot-unblocked"
        ? "Steal A Brainrot Unblocked - Play 3D Online"
        : game.slug === "acceleration-city"
          ? "Acceleration City - Play Online Driving Game"
        : game.slug === "bear-clicker"
          ? "Bear Clicker Online - Play Free"
        : game.slug === "football-bros"
          ? "Football Bros Game Online - Play Free"
        : game.slug === "slope-unblocked"
          ? "Slope Unblocked - Play Free Online"
        : game.slug === "snow-rider-3d-unblocked"
          ? "Snow Rider 3D Unblocked - Play Free"
        : `${game.name} - Play Online Free`,
    description: game.description,
    path: `/games/${game.slug}`,
    absoluteTitle:
      game.slug === "steal-a-brainrot-unblocked" ||
      game.slug === "acceleration-city" ||
      game.slug === "slope-unblocked" ||
      game.slug === "snow-rider-3d-unblocked" ||
      game.publishedAt > standaloneTitleAfter,
    type: "article",
  });
}

export default async function GamePage({ params }: GamePageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);

  if (!game) {
    notFound();
  }

  const category = getCategoryBySlug(game.category);
  const relatedGames = getRelatedGames(game, 12);
  const gameUrl = absoluteUrl(`/games/${game.slug}`);

  const applicationData: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: game.name,
    url: gameUrl,
    description: game.description,
    applicationCategory: "GameApplication",
    operatingSystem: "Any",
    author: {
      "@type": "Organization",
      name: game.developer,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    datePublished: game.publishedAt,
    dateModified: game.updatedAt,
  };

  if (game.rating && game.ratingCount) {
    applicationData.aggregateRating = {
      "@type": "AggregateRating",
      ratingValue: game.rating,
      ratingCount: game.ratingCount,
      bestRating: 10,
      worstRating: 1,
    };
  }

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteConfig.url,
      },
      ...(category
        ? [
            {
              "@type": "ListItem",
              position: 2,
              name: category.name,
              item: absoluteUrl(`/categories/${category.slug}`),
            },
          ]
        : []),
      {
        "@type": "ListItem",
        position: category ? 3 : 2,
        name: game.name,
        item: gameUrl,
      },
    ],
  };

  return (
    <main>
      <JsonLd data={[applicationData, breadcrumbData]} />
      <ArcadeLayout currentSlug={game.slug} games={games}>
        <GamePlayer game={game} />

        <GameOverview game={game} />

        {game.slug === "steal-a-brainrot-unblocked" ? <RaidPlanner /> : null}
        {game.slug === "acceleration-city" ? <RaidPlanner mode="drive" /> : null}
        {game.slug === "slope-unblocked" ? <RaidPlanner mode="slope" /> : null}
        {game.slug === "snow-rider-3d-unblocked" ? <RaidPlanner mode="drive" /> : null}

        <AdSlot />

        {relatedGames.length > 0 ? (
          <GameStrip games={relatedGames} label={`Games like ${game.name}`} />
        ) : null}

        <section className="portal-content-panel" aria-labelledby="game-guide-title">
          <div className="portal-section-heading">
            <p className="eyebrow">Walkthrough</p>
            <h2 id="game-guide-title">
              {game.slug === "steal-a-brainrot-unblocked"
                ? "Steal A Brainrot route guide"
                : `${game.name} guide`}
            </h2>
            <p>{game.tagline}</p>
          </div>
          <ContentSections sections={game.content} />
        </section>
      </ArcadeLayout>
    </main>
  );
}
