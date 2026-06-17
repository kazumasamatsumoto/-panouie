"use client";

import { useState } from "react";

interface ArticleShareProps {
  /** シェア対象の絶対URL */
  url: string;
  /** 記事タイトル（X・LINEの文面に使う） */
  title: string;
  /** メディア名（シェア文面の末尾に添える） */
  mediaName: string;
}

function ShareLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-plum-100 bg-cream text-plum-700 transition-colors hover:border-lavender-400 hover:text-lavender-600"
    >
      {children}
    </a>
  );
}

export function ArticleShare({ url, title, mediaName }: ArticleShareProps) {
  const [copied, setCopied] = useState(false);

  const shareText = `${title}｜${mediaName}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText,
  )}&url=${encodeURIComponent(url)}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    url,
  )}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
    url,
  )}`;

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mt-12 flex flex-col items-center gap-4">
      <p className="text-xs tracking-wide text-champagne-600">
        この記事をシェアする
      </p>
      <div className="flex items-center gap-3">
        <ShareLink href={xUrl} label="Xでシェア">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
          </svg>
        </ShareLink>

        <ShareLink href={lineUrl} label="LINEでシェア">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M12 2C6.48 2 2 5.69 2 10.23c0 4.07 3.55 7.48 8.35 8.12.32.07.77.21.88.49.1.25.07.64.03.89l-.14.85c-.04.25-.2.99.86.54 1.07-.45 5.75-3.39 7.85-5.8C21.39 13.65 22 12 22 10.23 22 5.69 17.52 2 12 2zM7.79 12.66H5.81c-.29 0-.52-.23-.52-.52V8.18c0-.29.23-.52.52-.52s.52.23.52.52v3.44h1.46c.29 0 .52.23.52.52s-.23.52-.52.52zm2.04-.52c0 .29-.23.52-.52.52s-.52-.23-.52-.52V8.18c0-.29.23-.52.52-.52s.52.23.52.52v3.96zm4.74 0c0 .22-.14.42-.36.49a.55.55 0 0 1-.16.03c-.16 0-.31-.08-.41-.21l-2.03-2.76v2.45c0 .29-.23.52-.52.52s-.52-.23-.52-.52V8.18c0-.22.14-.42.36-.49a.52.52 0 0 1 .57.18l2.04 2.77V8.18c0-.29.23-.52.52-.52s.52.23.52.52v3.96zm3.34-2.5c.29 0 .52.23.52.52s-.23.52-.52.52h-1.46v.94h1.46c.29 0 .52.23.52.52s-.23.52-.52.52h-1.98c-.29 0-.52-.23-.52-.52V8.18c0-.29.23-.52.52-.52h1.98c.29 0 .52.23.52.52s-.23.52-.52.52h-1.46v.94z" />
          </svg>
        </ShareLink>

        <ShareLink href={facebookUrl} label="Facebookでシェア">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.13 8.44 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.78-3.89 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99C18.34 21.13 22 16.99 22 12z" />
          </svg>
        </ShareLink>

        <button
          type="button"
          onClick={copyLink}
          aria-label="リンクをコピー"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-plum-100 bg-cream text-plum-700 transition-colors hover:border-lavender-400 hover:text-lavender-600"
        >
          {copied ? (
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="18"
              height="18"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
            </svg>
          )}
        </button>
      </div>
      <p
        aria-live="polite"
        className={`h-4 text-xs text-lavender-600 transition-opacity ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        リンクをコピーしました
      </p>
    </div>
  );
}
