import Link from "next/link";
import { categories } from "@/src/data/categories";
import { siteConfig } from "@/src/config/site";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="shell site-footer__grid">
        <div>
          <Link href="/" className="brand brand--footer">
            <span className="brand__mark" aria-hidden="true">
              {siteConfig.shortName}
            </span>
            <span>{siteConfig.name}</span>
          </Link>
          <p>{siteConfig.description}</p>
        </div>
        <div>
          <h2>Discover</h2>
          <ul>
            <li><Link href="/new-games">New Games</Link></li>
            <li><Link href="/popular-games">Popular Games</Link></li>
            <li><Link href="/trending-games">Trending Games</Link></li>
          </ul>
        </div>
        <div>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.slug}>
                <Link href={`/categories/${category.slug}`}>{category.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2>Company</h2>
          <ul>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/contact">Contact</Link></li>
            <li><Link href="/dmca">DMCA</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
        </div>
      </div>
      <div className="shell site-footer__bottom">
        <p>
          © {siteConfig.copyrightStartYear}
          {year > siteConfig.copyrightStartYear ? `–${year}` : ""} {siteConfig.name}.
          All rights reserved.
        </p>
        <p>Built as a reusable game SEO template.</p>
      </div>
    </footer>
  );
}
