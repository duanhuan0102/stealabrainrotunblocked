import type { Metadata } from "next";
import { InfoPage } from "@/src/components/info-page";
import { siteConfig } from "@/src/config/site";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Read the ${siteConfig.name} privacy policy for analytics, advertising, cookies, and third-party game embeds.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      description={`How ${siteConfig.name} handles analytics, advertising, cookies, and third-party game embeds.`}
    >
      <h2>Information we process</h2>
      <p>
        We may process basic technical information such as browser type, device
        type, approximate location, referring pages, pages viewed, and gameplay
        page interactions. If you contact us by email, we also process the
        information you choose to include in that message.
      </p>
      <h2>Analytics and advertising</h2>
      <p>
        This site uses Google Analytics to understand aggregate traffic and
        improve game pages. It may also use Google AdSense to display ads.
        Google and its partners may use cookies or similar technologies to
        measure ad performance, prevent abuse, and personalize ads where
        permitted by law.
      </p>
      <h2>Cookies, storage, and third-party games</h2>
      <p>
        Cookies, local storage, or similar browser technologies may be used for
        analytics, advertising, security, and basic site functionality. Some
        games are loaded through third-party iframes, and those providers may
        process data under their own privacy policies when the game frame loads.
      </p>
      <h2>Data rights</h2>
      <p>
        Visitors may have rights to access, correct, delete, or restrict the use
        of personal information. Requests can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
      <h2>Policy updates</h2>
      <p>
        We may update this policy when site features, advertising services,
        analytics providers, or legal requirements change. The latest version
        will remain available on this page.
      </p>
    </InfoPage>
  );
}
