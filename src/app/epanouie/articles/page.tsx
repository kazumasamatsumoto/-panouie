import type { Metadata } from "next";
import { ArticleCard } from "@/components/features/article-card";
import { getAllArticles } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "読みもの",
  description:
    "35歳からの毎日に寄り添う、自己肯定感のための読みもの。心が少し軽くなる言葉を集めました。",
};

const MEDIA = "epanouie";

export function ArticlesPage() {
  const articles = getAllArticles(MEDIA);

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="max-w-2xl">
        <h1 className="font-serif text-3xl font-medium text-plum-900">
          読みもの
        </h1>
        <p className="mt-4 leading-loose text-plum-500">
          うまく言葉にできない気持ちに、そっと名前をつけてくれるような。
          そんな読みものを、ここに集めています。
        </p>
      </header>

      {articles.length > 0 ? (
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} media={MEDIA} />
          ))}
        </div>
      ) : (
        <p className="mt-14 text-plum-500">
          記事を準備しています。もう少しだけお待ちください。
        </p>
      )}
    </div>
  );
}

export default ArticlesPage;
