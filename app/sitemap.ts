import type { MetadataRoute } from "next";

const siteUrl = "https://www.gbdev.pro";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 1 },
    { url: `${siteUrl}/trabalhos`, lastModified: new Date("2026-08-05"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${siteUrl}/sobre`, lastModified: new Date("2026-08-05"), changeFrequency: "yearly", priority: 0.8 },
    { url: `${siteUrl}/contato`, lastModified: new Date("2026-08-05"), changeFrequency: "yearly", priority: 0.7 },
  ];
}
