import type { Metadata } from "next";
import { Breadcrumbs } from "@/src/components/breadcrumbs";
import { GameGrid } from "@/src/components/game-grid";
import { games } from "@/src/data/games";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

export const metadata: Metadata = {
  title: "Search Games",
  description: "Search the template game collection.",
  robots: {
    index: false,
    follow: true,
  },
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q?.trim() ?? "";
  const normalizedQuery = query.toLowerCase();
  const results = normalizedQuery
    ? games.filter((game) => {
        const haystack = [
          game.name,
          game.tagline,
          game.description,
          game.category,
          ...game.tags,
        ]
          .join(" ")
          .toLowerCase();

        return haystack.includes(normalizedQuery);
      })
    : games;

  return (
    <main>
      <div className="shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Search" }]} />
      </div>
      <section className="listing-hero">
        <div className="shell listing-hero__inner">
          <p className="eyebrow">Game search</p>
          <h1>{query ? `Search results for "${query}"` : "Search games"}</h1>
          <p>
            {query
              ? `${results.length} matching game${results.length === 1 ? "" : "s"} found.`
              : "Enter a game name, category, or tag from the search field."}
          </p>
          <span className="listing-hero__count">{results.length} games</span>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          {results.length > 0 ? (
            <GameGrid games={results} />
          ) : (
            <div className="empty-state">
              <h2>No games found</h2>
              <p>Try a shorter keyword or browse the available template games.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
