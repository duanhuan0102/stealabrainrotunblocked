import { ImageResponse } from "next/og";
import { getGameBySlug } from "@/src/data/games";
import { siteConfig } from "@/src/config/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `Free online game on ${siteConfig.name}`;

interface GameOpenGraphImageProps {
  params: Promise<{ slug: string }>;
}

export default async function GameOpenGraphImage({
  params,
}: GameOpenGraphImageProps) {
  const { slug } = await params;
  const game = getGameBySlug(slug);
  const name = game?.name ?? "Free Online Game";
  const tagline = game?.tagline ?? siteConfig.description;
  const accent = game?.accent ?? "#f4c95d";
  const icon = game?.icon ?? siteConfig.shortName;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "70px",
          color: "#f8f6ef",
          background: `radial-gradient(circle at 78% 45%, ${accent}66 0, transparent 34%), linear-gradient(135deg, #090b12 0%, #171c2e 100%)`,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 760 }}>
          <div style={{ color: "#f4c95d", fontSize: 24, fontWeight: 800, letterSpacing: 4 }}>
            PLAY ONLINE FREE
          </div>
          <div style={{ marginTop: 24, fontSize: 84, fontWeight: 800, lineHeight: 1 }}>
            {name}
          </div>
          <div style={{ marginTop: 28, color: "#bec4d4", fontSize: 28, lineHeight: 1.4 }}>
            {tagline}
          </div>
          <div style={{ marginTop: 42, fontSize: 22 }}>{siteConfig.name}</div>
        </div>
        <div
          style={{
            width: 250,
            height: 250,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#090b12",
            background: accent,
            border: "14px solid rgba(255,255,255,.28)",
            borderRadius: 48,
            boxShadow: "0 30px 80px rgba(0,0,0,.4)",
            fontSize: 140,
            fontWeight: 900,
            transform: "rotate(-7deg)",
          }}
        >
          {icon}
        </div>
      </div>
    ),
    size,
  );
}
