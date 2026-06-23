import type { Metadata } from "next";
import { InfoPage } from "@/src/components/info-page";
import { siteConfig } from "@/src/config/site";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Read the ${siteConfig.name} privacy policy and learn how site data may be processed.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <InfoPage
      title="Privacy Policy"
      description="A starter privacy policy that must be adapted to the services used by the final site."
    >
      <h2>Information collected</h2>
      <p>
        The production site may process basic request information, device data,
        analytics events, and information that visitors submit directly. Update
        this section to name every analytics, advertising, consent, and support
        provider you actually use.
      </p>
      <h2>Cookies and local storage</h2>
      <p>
        Cookies or browser storage may be used for preferences, analytics,
        security, and advertising. Obtain consent where required and provide a
        way to revisit those choices.
      </p>
      <h2>Data rights</h2>
      <p>
        Visitors may have rights to access, correct, delete, or restrict the use
        of personal information. Requests can be sent to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
      <h2>Policy updates</h2>
      <p>
        Publish a visible effective date and update this page whenever data
        practices or service providers change.
      </p>
    </InfoPage>
  );
}
