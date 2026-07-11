import type { MetadataRoute } from "next";

const siteUrl = "https://kushagra-portfolio.vercel.app"; // placeholder — update after deployment

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
