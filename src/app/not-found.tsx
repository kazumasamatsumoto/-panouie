import Link from "next/link";

export function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <p className="text-5xl" aria-hidden>
        🌙
      </p>
      <h1 className="mt-6 font-serif text-2xl font-medium text-plum-900">
        ページが見つかりませんでした
      </h1>
      <p className="mt-4 leading-loose text-plum-500">
        探していたページは、まだここにないようです。
        <br />
        よかったら、トップページから巡ってみてください。
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-lavender-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-lavender-600"
      >
        ホームへ戻る
      </Link>
    </div>
  );
}

export default NotFound;
