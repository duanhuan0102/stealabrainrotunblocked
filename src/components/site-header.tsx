import Link from "next/link";
import { siteConfig } from "@/src/config/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label={`${siteConfig.name} home`}>
          <span className="brand__menu" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span className="brand__mark" aria-hidden="true">
            {siteConfig.shortName}
          </span>
          <span>{siteConfig.name}</span>
        </Link>

        <form className="site-search" role="search" action="/search">
          <label className="sr-only" htmlFor="site-search-input">
            Search games
          </label>
          <input
            id="site-search-input"
            name="q"
            type="search"
            placeholder="Search"
            autoComplete="off"
          />
          <button type="submit" aria-label="Search">
            <span className="search-icon" aria-hidden="true" />
          </button>
        </form>

        <div className="header-actions" aria-label="Quick actions">
          <Link href="/trending-games" className="header-icon-button" aria-label="Trending games">
            <span aria-hidden="true">T</span>
          </Link>
          <Link href="/popular-games" className="header-icon-button" aria-label="Popular games">
            <span aria-hidden="true">P</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
