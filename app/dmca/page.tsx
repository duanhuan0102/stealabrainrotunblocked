import type { Metadata } from "next";
import { InfoPage } from "@/src/components/info-page";
import { siteConfig } from "@/src/config/site";
import { createMetadata } from "@/src/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "DMCA Policy",
  description: `Copyright and DMCA reporting information for ${siteConfig.name}.`,
  path: "/dmca",
});

export default function DmcaPage() {
  return (
    <InfoPage
      title="DMCA Policy"
      description="How copyright owners can request review or removal of material."
    >
      <h2>Copyright notice</h2>
      <p>
        We respect intellectual property rights and respond to clear notices of
        alleged infringement. If you believe material on this site should be
        reviewed or removed, send a complete notice with the details below.
      </p>
      <h2>Required information</h2>
      <ul>
        <li>Identification of the copyrighted work.</li>
        <li>The exact URL of the material in question.</li>
        <li>Your contact information and authority to act.</li>
        <li>A good-faith statement and an accuracy statement.</li>
        <li>Your physical or electronic signature.</li>
      </ul>
      <p>
        Send complete notices to{" "}
        <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>.
      </p>
    </InfoPage>
  );
}
