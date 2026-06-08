import type { MetadataRoute } from "next";
import { lumi } from "@/lib/media/lumi";
import { getPublishedMedia } from "@/lib/media/registry";
import { getAllArticles } from "@/lib/content/articles";
import { getPublishedFeatures } from "@/lib/content/features";

const BASE_URL = lumi.baseUrl;

export function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [
    { url: BASE_URL, changeFrequency: "weekly", priority: 1 },
  ];

  for (const media of getPublishedMedia()) {
    entries.push(
      {
        url: `${BASE_URL}/${media.slug}`,
        changeFrequency: "weekly",
        priority: 0.9,
      },
      {
        url: `${BASE_URL}/${media.slug}/articles`,
        changeFrequency: "weekly",
        priority: 0.8,
      },
      {
        url: `${BASE_URL}/${media.slug}/about`,
        changeFrequency: "monthly",
        priority: 0.5,
      },
    );

    for (const article of getAllArticles(media.slug)) {
      entries.push({
        url: `${BASE_URL}/${media.slug}/articles/${article.slug}`,
        lastModified: new Date(article.publishedAt),
        changeFrequency: "monthly",
        priority: 0.6,
      });
    }

    // 特集ページ（現状は epanouie メディアのみ）
    if (media.slug === "epanouie") {
      for (const feature of getPublishedFeatures()) {
        entries.push({
          url: `${BASE_URL}/${media.slug}/features/${feature.slug}`,
          changeFrequency: "weekly",
          priority: 0.7,
        });
      }
    }
  }

  return entries;
}

export default sitemap;
