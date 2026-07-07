import Link from "next/link";
import { siteConfig } from "@/src/config/site";

const primaryLinks = [
  { label: "Home", href: "/", icon: "PLAY" },
  { label: "Play Game", href: "/", icon: "GAME" },
  { label: "Action Games", href: "/categories/action", icon: "3D" },
  { label: "Search", href: "/search", icon: "FIND" },
];

const companyLinks = [
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
  { label: "DMCA", href: "/dmca" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
];

export function AppSidebar() {
  const year = new Date().getFullYear();

  return (
    <aside className="app-sidebar" aria-label="Site navigation">
      <nav className="app-sidebar__primary" aria-label="Game lists">
        {primaryLinks.map((item) => (
          <Link key={item.label} href={item.href} className="app-sidebar__link">
            <span className="app-sidebar__icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <nav className="app-sidebar__secondary" aria-label="Company pages">
        {companyLinks.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <p className="app-sidebar__copyright">
        Copyright {year} {siteConfig.name}
      </p>
    </aside>
  );
}
