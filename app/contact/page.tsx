import type { Metadata } from "next";
import { InfoPage } from "@/src/components/info-page";
import { siteConfig } from "@/src/config/site";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description: `Contact ${siteConfig.name} about game submissions, corrections, partnerships, or technical issues.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <InfoPage
      title="Contact"
      description="Send a correction, report a broken game, or ask about a listing."
    >
      <h2>Get in touch</h2>
      <p>
        Email us at <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
        Include the page URL and a concise description so the request can be
        reviewed quickly.
      </p>
      <h2>Game submissions</h2>
      <p>
        Submission does not guarantee publication. Please include the game
        title, developer name, playable URL, supported devices, and confirmation
        that you have permission to distribute or embed the game.
      </p>
      <h2>Corrections</h2>
      <p>
        We welcome factual corrections. Mention the exact statement that needs
        attention and provide a reliable source when possible.
      </p>
    </InfoPage>
  );
}
