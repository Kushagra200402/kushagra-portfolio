import type { MetadataRoute } from "next";

const siteUrl = "https://kushagra-portfolio.vercel.app"; // placeholder — update after deployment

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
