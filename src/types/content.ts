export interface ContentSection {
  heading: string;
  level?: 2 | 3;
  paragraphs: string[];
  bullets?: string[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  introduction: string;
  accent: string;
  content: ContentSection[];
}

export interface GameTag {
  slug: string;
  name: string;
  description: string;
}

export interface Game {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  instructions: string[];
  content: ContentSection[];
  category: string;
  tags: string[];
  accent: string;
  icon: string;
  developer: string;
  technology: string;
  platforms: string[];
  publishedAt: string;
  updatedAt: string;
  featured?: boolean;
  trending?: boolean;
  plays: number;
  rating?: number;
  ratingCount?: number;
  embedUrl?: string;
}
