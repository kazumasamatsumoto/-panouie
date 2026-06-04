import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-plum-100/60 bg-plum-900 text-cream">
      <div className="mx-auto max-w-5xl px-6 py-14">
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
            <Link href="/" className="transition-colors hover:text-lavender-300">
              ホーム
            </Link>
            <Link
              href="/articles"
              className="transition-colors hover:text-lavender-300"
            >
              読みもの
            </Link>
            <Link
              href="/about"
              className="transition-colors hover:text-lavender-300"
            >
              Épanouieについて
            </Link>
          </nav>
        </div>
        <p className="mt-12 text-xs text-plum-200/70">
          © {year} Épanouie. すべての「そのまま」に、寄り添って。
        </p>
      </div>
    </footer>
  );
}
