import { ImageResponse } from "next/og";
import { siteConfig } from "@/src/config/site";

export const alt = `${siteConfig.name} - Play free online games`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px",
          color: "#f7f5ee",
          background:
            "radial-gradient(circle at 80% 20%, #ff5a67 0, transparent 32%), linear-gradient(135deg, #090b12 0%, #171c2e 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px", fontSize: 34 }}>
          <div
            style={{
              width: 72,
              height: 72,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 18,
              background: "#f4c95d",
              color: "#090b12",
              fontWeight: 800,
            }}
          >
            {siteConfig.shortName}
          </div>
          {siteConfig.name}
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 900 }}>
          <div style={{ fontSize: 76, fontWeight: 800, lineHeight: 1.02 }}>
            Find a game worth your next five minutes.
          </div>
          <div style={{ marginTop: 28, fontSize: 30, color: "#bec4d4" }}>
            Free browser games with clear controls and useful guides.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
