import type { Metadata } from "next";
import { InfoPage } from "@/src/components/info-page";
import { siteConfig } from "@/src/config/site";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "About",
  description: `Learn how ${siteConfig.name} selects, tests, and presents free browser games.`,
  path: "/about",
});

export default function AboutPage() {
  return (
    <InfoPage
      title={`About ${siteConfig.name}`}
      description="A focused browser-game library built around useful pages, quick play, and honest curation."
    >
      <h2>Why this site exists</h2>
      <p>
        We believe finding a browser game should be simple. Each title is
        presented with clear controls, a useful description, and enough context
        to help players decide whether it suits them.
      </p>
      <h2>How games are selected</h2>
      <p>
        Games are reviewed for loading behavior, control clarity, mobile
        compatibility, and basic content quality. A listing may be updated or
        removed when the underlying game stops working or no longer meets those
        standards.
      </p>
      <h2>Editorial principles</h2>
      <ul>
        <li>Descriptions should reflect the real game.</li>
        <li>Ratings must match visible and verifiable user input.</li>
        <li>Update dates should represent meaningful page changes.</li>
        <li>Sponsored placement should be identified clearly.</li>
      </ul>
    </InfoPage>
  );
}
