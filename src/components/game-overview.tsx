import Link from "next/link";
import type { Game } from "@/src/types/content";
import { getCategoryBySlug } from "@/src/data/categories";
import { getTagBySlug } from "@/src/data/tags";
import { formatCompactNumber, formatDate } from "@/src/lib/format";

interface GameOverviewProps {
  game: Game;
}

export function GameOverview({ game }: GameOverviewProps) {
  const category = getCategoryBySlug(game.category);

  return (
    <section className="game-overview" aria-labelledby="game-overview-title">
      <div className="game-overview__facts">
        <nav className="mini-breadcrumbs" aria-label="Breadcrumb">
          <Link href="/">Games</Link>
          {category ? <Link href={`/categories/${category.slug}`}>{category.name}</Link> : null}
          <span>{game.name}</span>
        </nav>

        <h1 id="game-overview-title">{game.name}</h1>
        <dl>
          <div>
            <dt>Developer:</dt>
            <dd>{game.developer}</dd>
          </div>
          <div>
            <dt>Rating:</dt>
            <dd>
              {game.rating
                ? `${game.rating.toFixed(1)}${
                    game.ratingCount
                      ? ` (${formatCompactNumber(game.ratingCount)} votes)`
                      : ""
                  }`
                : "New"}
            </dd>
          </div>
          <div>
            <dt>Released:</dt>
            <dd>
              <time dateTime={game.publishedAt}>{formatDate(game.publishedAt)}</time>
            </dd>
          </div>
          <div>
            <dt>Technology:</dt>
            <dd>{game.technology}</dd>
          </div>
          <div>
            <dt>Platforms:</dt>
            <dd>{game.platforms.join(", ")}</dd>
          </div>
        </dl>

        <div className="overview-tags" aria-label="Game tags">
          {category ? (
            <Link href={`/categories/${category.slug}`}>{category.name}</Link>
          ) : null}
          {game.tags.map((tagSlug) => {
            const tag = getTagBySlug(tagSlug);
            return tag ? (
              <Link key={tag.slug} href={`/tags/${tag.slug}`}>
                {tag.name}
              </Link>
            ) : null;
          })}
        </div>
      </div>

      <div className="game-overview__copy">
        <h2>Introduction</h2>
        <p>{game.description}</p>
        <h3>How to play</h3>
        <ul>
          {game.instructions.map((instruction) => (
            <li key={instruction}>{instruction}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
