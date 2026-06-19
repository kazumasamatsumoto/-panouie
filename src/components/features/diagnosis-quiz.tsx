"use client";

import { useMemo, useState } from "react";
import {
  calculateDiagnosis,
  diagnosisQuestions,
  type DiagnosisResult,
} from "@/lib/content/diagnosis";

interface DiagnosisQuizProps {
  /** メディア slug（シェア文面・リンクに使う） */
  mediaSlug: string;
  /** メディア名（シェア文面に添える） */
  mediaName: string;
  /** 結果シェア用のサイト絶対URL */
  baseUrl: string;
}

type Phase = "intro" | "question" | "result";

export function DiagnosisQuiz({
  mediaSlug,
  mediaName,
  baseUrl,
}: DiagnosisQuizProps) {
  const [phase, setPhase] = useState<Phase>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);

  const total = diagnosisQuestions.length;

  const result = useMemo<DiagnosisResult | null>(() => {
    if (phase !== "result") {
      return null;
    }
    return calculateDiagnosis(answers);
  }, [phase, answers]);

  function start() {
    setAnswers([]);
    setCurrent(0);
    setPhase("question");
  }

  function choose(choiceIndex: number) {
    const next = [...answers];
    next[current] = choiceIndex;
    setAnswers(next);

    if (current + 1 < total) {
      setCurrent(current + 1);
    } else {
      setPhase("result");
    }
  }

  function back() {
    if (current > 0) {
      setCurrent(current - 1);
    }
  }

  function restart() {
    setAnswers([]);
    setCurrent(0);
    setPhase("intro");
  }

  if (phase === "intro") {
    return <Intro onStart={start} total={total} />;
  }

  if (phase === "result" && result) {
    return (
      <Result
        result={result}
        mediaSlug={mediaSlug}
        mediaName={mediaName}
        baseUrl={baseUrl}
        onRestart={restart}
      />
    );
  }

  const question = diagnosisQuestions[current];
  const progress = Math.round(((current + 1) / total) * 100);

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-8">
        <div className="flex items-center justify-between text-xs text-plum-500">
          <span>
            Q{current + 1} / {total}
          </span>
          <span>{progress}%</span>
        </div>
        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-plum-100">
          <div
            className="h-full rounded-full bg-gradient-to-r from-lavender-500 to-champagne-500 transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div key={question.id} className="animate-fade-up">
        <h2 className="text-center font-serif text-2xl font-medium leading-relaxed text-plum-900">
          {question.prompt}
        </h2>
        {question.hint ? (
          <p className="mt-3 text-center text-sm text-plum-500">
            {question.hint}
          </p>
        ) : null}

        <div className="mt-10 grid gap-4">
          {question.choices.map((choice, index) => (
            <button
              key={choice.label}
              type="button"
              onClick={() => choose(index)}
              className="card-shine group rounded-2xl border border-plum-100 bg-white/70 px-6 py-5 text-left text-plum-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-lavender-400 hover:shadow-lg hover:shadow-lavender-400/20"
            >
              <span className="font-medium leading-relaxed transition-colors group-hover:text-lavender-600">
                {choice.label}
              </span>
            </button>
          ))}
        </div>

        {current > 0 ? (
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={back}
              className="text-sm text-plum-400 transition-colors hover:text-lavender-600"
            >
              ← ひとつ前にもどる
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

function Intro({ onStart, total }: { onStart: () => void; total: number }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <p className="text-sm tracking-[0.3em] text-champagne-600">✦ 診断 ✦</p>
      <h1 className="mt-6 font-serif text-3xl font-medium leading-tight text-plum-900 sm:text-4xl">
        あなたは、どう輝く？
      </h1>
      <p className="mx-auto mt-6 max-w-xl text-base leading-loose text-plum-600">
        輝き方に、正解はありません。
        <br />
        {total}つの問いに答えるだけ。あなたの中にある光が、どんな色をしているのか——
        <br />
        やさしく、そっと映し出します。
      </p>
      <button
        type="button"
        onClick={onStart}
        className="mt-10 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-lavender-500 to-lavender-600 px-10 py-3.5 text-sm font-medium text-white shadow-lg shadow-lavender-500/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lavender-500/45"
      >
        診断をはじめる
      </button>
      <p className="mt-5 text-xs text-plum-400">
        所要 約1分・回答は記録されません
      </p>
    </div>
  );
}

function Result({
  result,
  mediaSlug,
  mediaName,
  baseUrl,
  onRestart,
}: {
  result: DiagnosisResult;
  mediaSlug: string;
  mediaName: string;
  baseUrl: string;
  onRestart: () => void;
}) {
  const { type, secondaryType } = result;
  const [copied, setCopied] = useState(false);

  const diagnosisUrl = `${baseUrl}/${mediaSlug}/diagnosis`;
  const shareText = `私の輝き方は「${type.name}」${type.emoji}でした。${type.catch}｜あなたはどう輝く？診断｜${mediaName}`;
  const xUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    shareText,
  )}&url=${encodeURIComponent(diagnosisUrl)}`;
  const lineUrl = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
    diagnosisUrl,
  )}`;

  async function copyResult() {
    try {
      await navigator.clipboard.writeText(`${shareText}\n${diagnosisUrl}`);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  }

  return (
    <div className="mx-auto max-w-2xl animate-fade-up">
      <p className="text-center text-sm tracking-[0.3em] text-champagne-600">
        ✦ あなたの輝き方 ✦
      </p>

      <div
        className={`mt-6 rounded-3xl bg-gradient-to-br ${type.cardGradient} p-8 text-center sm:p-12`}
      >
        <span className="text-5xl" aria-hidden>
          {type.emoji}
        </span>
        <h1 className="mt-4 font-serif text-3xl font-medium text-plum-900 sm:text-4xl">
          {type.name}
        </h1>
        <p className="mt-3 text-base font-medium text-lavender-700">
          {type.catch}
        </p>
      </div>

      <div className="mt-10 space-y-8">
        <ResultBlock title="あなたという人">
          {type.portrait}
        </ResultBlock>
        <ResultBlock title="あなたの光">{type.strength}</ResultBlock>
        <ResultBlock title="これから、もっと輝くために">
          {type.nextStep}
        </ResultBlock>

        {secondaryType ? (
          <p className="rounded-2xl border border-plum-100 bg-white/60 px-6 py-5 text-sm leading-relaxed text-plum-600">
            あなたの中には「{secondaryType.emoji}{" "}
            {secondaryType.name}」の輝きも、しっかり息づいています。
            ひとつに決めなくていい。あなたは、いくつもの光を持っています。
          </p>
        ) : null}
      </div>

      <div className="mt-12 rounded-3xl bg-plum-900 px-8 py-10 text-center">
        <p className="font-serif text-lg leading-loose text-cream sm:text-xl">
          {type.cheer}
        </p>
        <p className="mt-4 text-xs tracking-[0.2em] text-champagne-300">
          — {mediaName}
        </p>
      </div>

      <div className="mt-10 flex flex-col items-center gap-4">
        <p className="text-xs tracking-wide text-champagne-600">
          この結果をシェアする
        </p>
        <div className="flex items-center gap-3">
          <a
            href={xUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Xでシェア"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-plum-100 bg-cream text-plum-700 transition-colors hover:border-lavender-400 hover:text-lavender-600"
          >
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          </a>
          <a
            href={lineUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LINEでシェア"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-plum-100 bg-cream text-plum-700 transition-colors hover:border-lavender-400 hover:text-lavender-600"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 5.69 2 10.23c0 4.07 3.55 7.48 8.35 8.12.32.07.77.21.88.49.1.25.07.64.03.89l-.14.85c-.04.25-.2.99.86.54 1.07-.45 5.75-3.39 7.85-5.8C21.39 13.65 22 12 22 10.23 22 5.69 17.52 2 12 2z" />
            </svg>
          </a>
          <button
            type="button"
            onClick={copyResult}
            aria-label="結果をコピー"
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
          結果をコピーしました
        </p>
      </div>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
        <button
          type="button"
          onClick={onRestart}
          className="text-sm text-plum-400 transition-colors hover:text-lavender-600"
        >
          もう一度診断する
        </button>
        <span className="text-plum-200" aria-hidden>
          ・
        </span>
        <a
          href={`/${mediaSlug}/articles`}
          className="text-sm text-lavender-600 transition-colors hover:text-lavender-500"
        >
          あなたへの読みものを見る →
        </a>
      </div>
    </div>
  );
}

function ResultBlock({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="font-serif text-lg font-medium text-plum-900">{title}</h2>
      <p className="mt-3 leading-loose text-plum-700">{children}</p>
    </div>
  );
}
