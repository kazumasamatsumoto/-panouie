import Link from "next/link";
import { Aurora } from "@/components/ui/aurora";
import { Sparkles } from "@/components/ui/sparkles";
import { lumi } from "@/lib/media/lumi";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative mt-24 overflow-hidden border-t border-plum-100/60 bg-plum-900 text-cream">
      <Aurora tone="dark" />
      <Sparkles tone="dark" />
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-xl font-medium tracking-wide">
              Épanouie
            </p>
            <p className="mt-3 text-sm leading-relaxed text-plum-200">
              35歳からの独身女性のための、自己肯定感メディア。
              そのままのあなたで、いい。
            </p>
          </div>
          <nav className="flex flex-col gap-3 text-sm text-plum-200">
            <Link
              href="/epanouie"
              className="transition-colors hover:text-lavender-300"
            >
              Épanouieホーム
            </Link>
            <Link
              href="/epanouie/articles"
              className="transition-colors hover:text-lavender-300"
            >
              読みもの
            </Link>
            <Link
              href="/epanouie/about"
              className="transition-colors hover:text-lavender-300"
            >
              Épanouieについて
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
          © {year} {lumi.name} — Épanouie. すべての「そのまま」に、寄り添って。
        </p>
      </div>
    </footer>
  );
}
