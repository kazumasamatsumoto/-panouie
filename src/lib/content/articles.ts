import fs from "node:fs";
import path from "node:path";
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
  const fullPath = path.join(mediaDir(media), `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as ArticleFrontmatter, content };
}

export function getArticleSlugs(media: string): string[] {
  const dir = mediaDir(media);
  if (!fs.existsSync(dir)) {
    return [];
  }
  return fs
    .readdirSync(dir)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllArticles(media: string): ArticleMeta[] {
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
}

export async function getArticle(
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
}
