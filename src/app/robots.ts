import type { MetadataRoute } from "next";
import { lumi } from "@/lib/media/lumi";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${lumi.baseUrl}/sitemap.xml`,
  };
}
