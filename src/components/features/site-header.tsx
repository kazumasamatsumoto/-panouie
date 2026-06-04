import Link from "next/link";
import { lumi } from "@/lib/media/lumi";

const navItems = [
  { href: "/epanouie/articles", label: "読みもの" },
  { href: "/epanouie/about", label: "Épanouieについて" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-plum-100/60 bg-cream/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <div className="flex items-center gap-4">
          <Link href="/epanouie" className="group flex flex-col leading-none">
            <span className="font-serif text-2xl font-medium tracking-wide text-plum-900 transition-colors group-hover:text-lavender-500">
              Épanouie
            </span>
            <span className="mt-1 text-[0.65rem] tracking-[0.2em] text-champagne-600">
              35歳から、本当の自分が咲く。
            </span>
          </Link>
          <Link
            href="/"
            className="hidden text-[0.65rem] tracking-[0.15em] text-champagne-600 transition-colors hover:text-lavender-500 sm:block"
          >
            by {lumi.name}
          </Link>
        </div>
        <nav>
          <ul className="flex items-center gap-7 text-sm text-plum-700">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="transition-colors hover:text-lavender-500"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
