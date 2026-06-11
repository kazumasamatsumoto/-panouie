import Link from "next/link";
import type { MediaBrand } from "@/types/media";

interface MediaCardProps {
  media: MediaBrand;
}

export function MediaCard({ media }: MediaCardProps) {
  const card = (
    <div
      className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-plum-100 bg-white/70 transition-all duration-300 ${
        media.published
          ? "card-shine hover:-translate-y-1.5 hover:border-lavender-300 hover:shadow-xl hover:shadow-lavender-400/25"
          : "opacity-70"
      }`}
    >
      <div
        className={`relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br ${media.cardGradient}`}
      >
        <span
          aria-hidden
          className="absolute h-28 w-28 rounded-full bg-white/50 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-lavender-300/40"
        />
        <span
          aria-hidden
          className="relative text-6xl transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110"
        >
          {media.emoji}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-8">
        <div className="flex items-center gap-3">
          <h3 className="font-serif text-2xl font-medium text-plum-900">
            {media.name}
          </h3>
          {!media.published && (
            <span className="rounded-full bg-plum-100 px-3 py-0.5 text-xs text-plum-500">
              準備中
            </span>
          )}
        </div>
        <p className="mt-2 text-sm font-medium text-lavender-600">
          {media.tagline}
        </p>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-plum-500">
          {media.description}
        </p>
        <p className="mt-6 text-xs tracking-wide text-champagne-600">
          for {media.audience}
        </p>
        {media.published && (
          <span className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-lavender-600 transition-colors group-hover:text-lavender-500">
            このメディアへ →
          </span>
        )}
      </div>
    </div>
  );

  if (!media.published) {
    return card;
  }

  return (
    <Link href={`/${media.slug}`} className="block h-full">
      {card}
    </Link>
  );
}
