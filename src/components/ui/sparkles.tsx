interface SparkleSpec {
  top: string;
  left: string;
  size: number;
  delay: string;
  duration: string;
}

const SPARKLES: SparkleSpec[] = [
  { top: "16%", left: "12%", size: 14, delay: "0s", duration: "3.4s" },
  { top: "28%", left: "84%", size: 18, delay: "0.9s", duration: "4.2s" },
  { top: "64%", left: "8%", size: 11, delay: "1.6s", duration: "3.8s" },
  { top: "12%", left: "58%", size: 9, delay: "2.2s", duration: "3.1s" },
  { top: "72%", left: "76%", size: 15, delay: "0.5s", duration: "4.6s" },
  { top: "44%", left: "92%", size: 10, delay: "2.8s", duration: "3.5s" },
  { top: "82%", left: "36%", size: 12, delay: "1.2s", duration: "4s" },
  { top: "36%", left: "22%", size: 8, delay: "3.2s", duration: "3.3s" },
  { top: "56%", left: "50%", size: 10, delay: "1.9s", duration: "4.4s" },
];

const TONE_COLORS = {
  light: ["text-lavender-400", "text-champagne-500", "text-lavender-300"],
  dark: ["text-lavender-300", "text-champagne-300", "text-cream"],
} as const;

interface SparklesProps {
  /** 置かれる面の明暗。暗い面では明るい色で瞬く。 */
  tone?: keyof typeof TONE_COLORS;
}

/**
 * 親要素の中で、時間差で静かに瞬く光の粒。
 * 親要素に `relative` を指定して使う。
 */
export function Sparkles({ tone = "light" }: SparklesProps) {
  const colors = TONE_COLORS[tone];

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {SPARKLES.map((sparkle, index) => (
        <svg
          key={`${sparkle.top}-${sparkle.left}`}
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`absolute animate-twinkle ${colors[index % colors.length]}`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            width: sparkle.size,
            height: sparkle.size,
            animationDelay: sparkle.delay,
            animationDuration: sparkle.duration,
          }}
        >
          <path d="M12 0c.9 6.9 4.2 10.2 12 12-7.8 1.8-11.1 5.1-12 12-.9-6.9-4.2-10.2-12-12C7.8 10.2 11.1 6.9 12 0Z" />
        </svg>
      ))}
    </div>
  );
}
