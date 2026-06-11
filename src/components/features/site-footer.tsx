import Link from "next/link";
import { Aurora } from "@/components/ui/aurora";
import { Sparkles } from "@/components/ui/sparkles";
import { lumi } from "@/lib/media/lumi";
import { getSiteCopy } from "@/lib/media/site-copy";
import type { MediaBrand } from "@/types/media";

interface SiteFooterProps {
  media: MediaBrand;
}

export function SiteFooter({ media }: SiteFooterProps) {
  const year = new Date().getFullYear();
  const copy = getSiteCopy(media.slug);
  const description = copy?.footer.description ?? [media.description];

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-plum-100/60 bg-plum-900 text-cream">
      <Aurora tone="dark" />
      <Sparkles tone="dark" />
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-medium tracking-wide">
              {media.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-plum-200">
              {description.map((line, index) => (
                <span key={line}>
                  {index > 0 && <br />}
                  {line}
                </span>
              ))}
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-plum-200">
            <Link
              href={`/${media.slug}`}
              className="transition-colors hover:text-lavender-300"
            >
              {media.name}ホーム
            </Link>
            <Link
              href={`/${media.slug}/articles`}
              className="transition-colors hover:text-lavender-300"
            >
              読みもの
            </Link>
            <Link
              href={`/${media.slug}/about`}
              className="transition-colors hover:text-lavender-300"
            >
              {media.name}について
            </Link>
            <Link
              href="/"
              className="mt-2 text-plum-200/70 transition-colors hover:text-lavender-300"
            >
              ← {lumi.name} ポータルへ
            </Link>
          </nav>
        </div>
        <p className="mt-12 text-xs text-plum-200/70">
          © {year} {lumi.name} — {media.name}. {media.tagline}
        </p>
      </div>
    </footer>
  );
}
