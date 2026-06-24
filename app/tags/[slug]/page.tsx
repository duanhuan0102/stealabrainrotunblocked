import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/src/components/breadcrumbs";
import { GameGrid } from "@/src/components/game-grid";
import { JsonLd } from "@/src/components/json-ld";
import { seoConfig } from "@/src/config/site";
import { getGamesByTag } from "@/src/data/games";
import { getTagBySlug, tags } from "@/src/data/tags";
import { absoluteUrl, createMetadata } from "@/src/lib/seo";

interface TagPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return tags
    .filter((tag) => getGamesByTag(tag.slug).length > 0)
    .map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({
  params,
}: TagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    return {};
  }

  const tagGames = getGamesByTag(tag.slug);
  const metadata = createMetadata({
    title: `${tag.name} Games - Play Online Free`,
    description: tag.description,
    path: `/tags/${tag.slug}`,
  });

  if (tagGames.length < seoConfig.minGamesForIndexableTag) {
    metadata.robots = {
      index: false,
      follow: true,
    };
  }

  return metadata;
}

export default async function TagPage({ params }: TagPageProps) {
  const { slug } = await params;
  const tag = getTagBySlug(slug);

  if (!tag) {
    notFound();
  }

  const taggedGames = getGamesByTag(tag.slug);
  const pageUrl = absoluteUrl(`/tags/${tag.slug}`);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${tag.name} Games`,
    url: pageUrl,
    description: tag.description,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: taggedGames.length,
      itemListElement: taggedGames.map((game, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: game.name,
        url: absoluteUrl(`/games/${game.slug}`),
      })),
    },
  };

  return (
    <main>
      <JsonLd data={structuredData} />
      <div className="shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: `${tag.name} Games` }]} />
      </div>
      <section className="listing-hero">
        <div className="shell listing-hero__inner">
          <p className="eyebrow">Gameplay tag</p>
          <h1>{tag.name} Games</h1>
          <p>{tag.description}</p>
          <span className="listing-hero__count">{taggedGames.length} games</span>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          <h2 className="sr-only">Games tagged {tag.name}</h2>
          <GameGrid games={taggedGames} />
        </div>
      </section>
    </main>
  );
}
