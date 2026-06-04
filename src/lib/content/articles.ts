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

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");

function readArticleFile(slug: string): {
  data: ArticleFrontmatter;
  content: string;
} {
  const fullPath = path.join(ARTICLES_DIR, `${slug}.md`);
  const raw = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(raw);
  return { data: data as ArticleFrontmatter, content };
}

export function getArticleSlugs(): string[] {
  if (!fs.existsSync(ARTICLES_DIR)) {
    return [];
  }
  return fs
    .readdirSync(ARTICLES_DIR)
    .filter((file) => file.endsWith(".md"))
    .map((file) => file.replace(/\.md$/, ""));
}

export function getAllArticles(): ArticleMeta[] {
  return getArticleSlugs()
    .map((slug) => {
      const { data, content } = readArticleFile(slug);
      return {
        ...data,
        slug,
        readingMinutes: Math.max(1, Math.round(readingTime(content).minutes)),
      } satisfies ArticleMeta;
    })
    .sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
}

export async function getArticle(slug: string): Promise<Article> {
  const { data, content } = readArticleFile(slug);
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
