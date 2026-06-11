import Link from "next/link";
import { Aurora } from "@/components/ui/aurora";
import { Sparkles } from "@/components/ui/sparkles";
import { lumi } from "@/lib/media/lumi";
import { getPublishedMedia } from "@/lib/media/registry";

export function LumiFooter() {
  const year = new Date().getFullYear();
  const media = getPublishedMedia();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-plum-100/60 bg-plum-900 text-cream">
      <Aurora tone="dark" />
      <Sparkles tone="dark" />
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-medium tracking-wide">
              {lumi.name}
            </p>
            <p className="mt-3 text-sm leading-relaxed text-plum-200">
              {lumi.tagline}
              <br />
              AIとともに、一人ひとりの中にある光を。
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-plum-200">
            <span className="text-xs tracking-wide text-plum-200/60">
              メディア
            </span>
            {media.map((m) => (
              <Link
                key={m.slug}
                href={`/${m.slug}`}
                className="transition-colors hover:text-lavender-300"
              >
                {m.name}
              </Link>
            ))}
          </nav>
        </div>
        <p className="mt-12 text-xs text-plum-200/70">
          © {year} {lumi.name}. AIで、あなたの光を。
        </p>
      </div>
    </footer>
  );
}
