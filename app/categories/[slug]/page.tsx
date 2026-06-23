import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/src/components/breadcrumbs";
import { ContentSections } from "@/src/components/content-sections";
import { GameGrid } from "@/src/components/game-grid";
import { JsonLd } from "@/src/components/json-ld";
import { categories, getCategoryBySlug } from "@/src/data/categories";
import { getGamesByCategory } from "@/src/data/games";
import { absoluteUrl, createMetadata } from "@/src/lib/seo";

interface CategoryPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  const categoryGames = getGamesByCategory(category.slug);
  const metadata = createMetadata({
    title: `Best ${category.name} - Play Online Free`,
    description: category.description,
    path: `/categories/${category.slug}`,
  });

  if (categoryGames.length === 0) {
    metadata.robots = {
      index: false,
      follow: true,
    };
  }

  return metadata;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const categoryGames = getGamesByCategory(category.slug);
  const pageUrl = absoluteUrl(`/categories/${category.slug}`);

  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: category.name,
      url: pageUrl,
      description: category.description,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: categoryGames.length,
        itemListElement: categoryGames.map((game, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: game.name,
          url: absoluteUrl(`/games/${game.slug}`),
        })),
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: category.name, item: pageUrl },
      ],
    },
  ];

  return (
    <main>
      <JsonLd data={structuredData} />
      <div className="shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: category.name }]} />
      </div>
      <section
        className="taxonomy-hero"
        style={{ "--taxonomy-accent": category.accent } as CSSProperties}
      >
        <div className="shell taxonomy-hero__inner">
          <p className="eyebrow">Game category</p>
          <h1>{category.name}</h1>
          <p>{category.introduction}</p>
          <span>{categoryGames.length} curated games</span>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          <h2 className="sr-only">All {category.name}</h2>
          <GameGrid games={categoryGames} />
        </div>
      </section>
      <section className="editorial-section">
        <div className="shell editorial-section__inner">
          <div className="editorial-section__label">
            <p className="eyebrow">Category guide</p>
            <p>Learn what to expect before you choose a game.</p>
          </div>
          <ContentSections sections={category.content} />
        </div>
      </section>
    </main>
  );
}
