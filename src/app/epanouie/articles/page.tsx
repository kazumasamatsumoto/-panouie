import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/features/article-card";
import { getAllArticles } from "@/lib/content/articles";
import { getPublishedFeatures } from "@/lib/content/features";

export const metadata: Metadata = {
  title: "読みもの",
  description:
    "35歳からの毎日に寄り添う、自己肯定感のための読みもの。心が少し軽くなる言葉を集めました。",
};

const MEDIA = "epanouie";

export default function ArticlesPage() {
  const allArticles = getAllArticles(MEDIA);
  const articles = allArticles.filter((a) => !a.feature);
  const features = getPublishedFeatures();

  return (
    <div className="mx-auto max-w-5xl px-6 py-20">
      <header className="max-w-2xl">
        <p className="animate-fade-up text-sm tracking-[0.3em] text-champagne-600">
          ✦ ARTICLES
        </p>
        <h1 className="animate-fade-up mt-4 font-serif text-3xl font-medium text-plum-900 [animation-delay:150ms]">
          読みもの
        </h1>
        <p className="animate-fade-up mt-4 leading-loose text-plum-500 [animation-delay:300ms]">
          うまく言葉にできない気持ちに、そっと名前をつけてくれるような。
          そんな読みものを、ここに集めています。
        </p>
      </header>

      {features.length > 0 && (
        <section className="mt-14">
          <h2 className="text-sm tracking-wide text-champagne-600">特集</h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <Link
                key={feature.slug}
                href={`/${MEDIA}/features/${feature.slug}`}
                className={`card-shine scroll-reveal group flex items-center gap-5 rounded-2xl bg-gradient-to-br ${feature.cardGradient} p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-lavender-400/25`}
              >
                <span
                  className="text-4xl transition-transform duration-300 group-hover:scale-110"
                  aria-hidden
                >
                  {feature.emoji}
                </span>
                <span className="flex-1">
                  <span className="font-serif text-lg font-medium text-plum-900 transition-colors group-hover:text-lavender-600">
                    {feature.title}
                  </span>
                  <span className="mt-1 block text-sm leading-relaxed text-plum-700">
                    {feature.description}
                  </span>
                  <span className="mt-3 inline-block text-xs font-medium text-lavender-600">
                    特集を読む →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </section>
      )}

      {articles.length > 0 ? (
        <section className="mt-16">
          <h2 className="text-sm tracking-wide text-champagne-600">
            すべての読みもの
          </h2>
          <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <div key={article.slug} className="scroll-reveal">
                <ArticleCard article={article} media={MEDIA} />
              </div>
            ))}
          </div>
        </section>
      ) : (
        <p className="mt-14 text-plum-500">
          記事を準備しています。もう少しだけお待ちください。
        </p>
      )}
    </div>
  );
}
