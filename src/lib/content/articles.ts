import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";
import readingTime from "reading-time";
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import type {
  Article,
  ArticleFrontmatter,
  ArticleMeta,
} from "@/types/article";

const CONTENT_DIR = path.join(process.cwd(), "content");

function mediaDir(media: string): string {
  return path.join(CONTENT_DIR, media);
}

function readArticleFile(
  media: string,
  slug: string,
): { data: ArticleFrontmatter; content: string } {
  // `_` 始まりはバックログ等の非公開ファイル。記事として扱わない。
  if (slug.startsWith("_") || slug.includes("/") || slug.includes("..")) {
    throw new Error(`Invalid article slug: ${slug}`);
  }
  const fullPath = path.join(mediaDir(media), `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  if (!data.title) {
    throw new Error(`Article is missing frontmatter: ${slug}`);
  }
  return { data: data as ArticleFrontmatter, content };
}

export function getArticleSlugs(media: string): string[] {
  const dir = mediaDir(media);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md") && !file.startsWith("_"))
    .map((file) => file.replace(/\.md$/, ""));
}

// cache() でリクエスト内の重複パースを防ぐ（記事数が多いため）
export const getAllArticles = cache(function getAllArticles(
  media: string,
): ArticleMeta[] {
  return getArticleSlugs(media)
    .map((slug) => {
      const { data, content } = readArticleFile(media, slug);
      return {
        ...data,
        slug,
        readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
      } satisfies ArticleMeta;
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
});

export function getArticlesByFeature(
  media: string,
  feature: string,
): ArticleMeta[] {
  return getAllArticles(media)
    .filter((article) => article.feature === feature)
    .sort((a, b) => {
      const oa = a.featureOrder ?? Number.MAX_SAFE_INTEGER;
      const ob = b.featureOrder ?? Number.MAX_SAFE_INTEGER;
      if (oa !== ob) return oa - ob;
      return a.publishedAt < b.publishedAt ? 1 : -1;
    });
}

// generateMetadata とページ本体の双方から呼ばれるため cache() でパースを共有する
export const getArticle = cache(async function getArticle(
  media: string,
  slug: string,
): Promise<Article> {
  const { data, content } = readArticleFile(media, slug);
  const processed = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: false })
    .process(content);

  return {
    ...data,
    slug,
    readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
    contentHtml: processed.toString(),
  } satisfies Article;
});
