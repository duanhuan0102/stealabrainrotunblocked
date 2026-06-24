import type { Metadata } from "next";
import { siteConfig } from "@/src/config/site";

export function absoluteUrl(path = "/") {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
}

interface MetadataInput {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
}

export function createMetadata({
  title,
  description,
  path,
  type = "website",
  image,
}: MetadataInput): Metadata {
  const canonical = absoluteUrl(path);

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type,
      ...(image ? { images: [{ url: image, width: 1280, height: 720 }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(image ? { images: [image] } : {}),
    },
  };
}
