import type { ReactNode } from "react";
import { Breadcrumbs } from "@/src/components/breadcrumbs";
import { siteConfig } from "@/src/config/site";

interface InfoPageProps {
  title: string;
  description: string;
  children: ReactNode;
}

export function InfoPage({ title, description, children }: InfoPageProps) {
  return (
    <main className="info-page">
      <div className="shell">
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: title }]} />
        <div className="info-page__layout">
          <header>
            <p className="eyebrow">{siteConfig.name}</p>
            <h1>{title}</h1>
            <p>{description}</p>
          </header>
          <article className="prose info-page__content">{children}</article>
        </div>
      </div>
    </main>
  );
}
