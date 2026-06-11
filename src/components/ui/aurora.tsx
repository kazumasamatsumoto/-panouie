interface AuroraProps {
  /** 暗い面の上に置く場合は "dark"（発光を強める） */
  tone?: "light" | "dark";
}

/**
 * ヒーローの背景でゆっくり漂う、オーロラのような光のにじみ。
 * 親要素に `relative overflow-hidden` を指定して使う。
 */
export function Aurora({ tone = "light" }: AuroraProps) {
  if (tone === "dark") {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-[80%] rounded-full bg-lavender-500/25 blur-3xl animate-drift" />
        <div className="absolute -bottom-24 left-1/2 h-72 w-72 translate-x-[15%] rounded-full bg-champagne-500/15 blur-3xl animate-drift-slow" />
      </div>
    );
  }

  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute -top-32 left-1/2 h-[30rem] w-[30rem] -translate-x-[75%] rounded-full bg-lavender-300/35 blur-3xl animate-drift" />
      <div className="absolute -top-10 left-1/2 h-[24rem] w-[24rem] translate-x-[5%] rounded-full bg-champagne-300/45 blur-3xl animate-drift-slow" />
      <div className="absolute -bottom-28 left-1/2 h-[22rem] w-[22rem] -translate-x-[40%] rounded-full bg-plum-100/90 blur-3xl animate-drift [animation-delay:-12s]" />
    </div>
  );
}
