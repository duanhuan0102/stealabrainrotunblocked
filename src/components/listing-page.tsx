import { Breadcrumbs } from "@/src/components/breadcrumbs";
import { GameGrid } from "@/src/components/game-grid";
import type { Game } from "@/src/types/content";

interface ListingPageProps {
  title: string;
  description: string;
  eyebrow: string;
  games: Game[];
}

export function ListingPage({
  title,
  description,
  eyebrow,
  games,
}: ListingPageProps) {
  return (
    <main>
      <div className="shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
      </div>
      <section className="listing-hero">
        <div className="shell listing-hero__inner">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{description}</p>
          <span className="listing-hero__count">{games.length} games</span>
        </div>
      </section>
      <section className="page-section">
        <div className="shell">
          <h2 className="sr-only">All {title}</h2>
          <GameGrid games={games} />
        </div>
      </section>
    </main>
  );
}
