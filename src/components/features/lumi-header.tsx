import Link from "next/link";
import { lumi } from "@/lib/media/lumi";

export function LumiHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-plum-100/60 bg-cream/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <Link href="/" className="group flex items-center gap-2 leading-none">
          <span aria-hidden className="text-xl">
            ✴︎
          </span>
          <span className="flex flex-col">
            <span className="font-serif text-2xl font-medium tracking-wide text-plum-900 transition-colors group-hover:text-lavender-500">
              {lumi.name}
            </span>
            <span className="mt-1 text-[0.65rem] tracking-[0.2em] text-champagne-600">
              {lumi.tagline}
            </span>
          </span>
        </Link>
        <nav>
          <ul className="flex items-center gap-7 text-sm text-plum-700">
            <li>
              <Link
                href="/epanouie"
                className="transition-colors hover:text-lavender-500"
              >
                Épanouie
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
