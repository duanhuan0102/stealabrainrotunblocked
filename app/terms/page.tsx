import type { Metadata } from "next";
import { InfoPage } from "@/src/components/info-page";
import { siteConfig } from "@/src/config/site";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Terms of Use",
  description: `Terms governing access to ${siteConfig.name} and its browser-game listings.`,
  path: "/terms",
});

export default function TermsPage() {
  return (
    <InfoPage
      title="Terms of Use"
      description="Starter terms for the template. Review them with qualified counsel before launch."
    >
      <h2>Acceptable use</h2>
      <p>
        Visitors may use the site for lawful personal entertainment. Attempts to
        disrupt the service, bypass security, scrape protected systems, or
        misuse third-party content are prohibited.
      </p>
      <h2>Third-party games</h2>
      <p>
        Games and external services may be supplied by third parties. Their
        availability, content, and data practices can change independently of
        this site.
      </p>
      <h2>No warranty</h2>
      <p>
        The service is provided as available. Adapt this clause and the
        limitation of liability to the jurisdiction and business model of the
        final project.
      </p>
      <h2>Contact</h2>
      <p>
        Questions about these terms can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </InfoPage>
  );
}
