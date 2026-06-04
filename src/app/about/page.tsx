import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Épanouieについて",
  description:
    "Épanouie（エパノウイ）は、35歳からの独身女性のための自己肯定感メディア。わたしたちが大切にしている想いをお伝えします。",
};

const values = [
  {
    emoji: "🌿",
    title: "そのままで、いい",
    body: "変わらなくちゃ、と急かす声から少し離れて。あなたの「今」を、まるごと肯定する場所でありたい。",
  },
  {
    emoji: "🤍",
    title: "共感から、はじめる",
    body: "正論よりも、まず寄り添うこと。言葉にできない気持ちに、そっと名前をつけられるように。",
  },
  {
    emoji: "🌷",
    title: "あなたのペースで",
    body: "誰かと比べる速さではなく、あなたが納得できる速さで。咲く季節は、人それぞれです。",
  },
];

export function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <section className="text-center">
        <p className="text-sm tracking-[0.3em] text-champagne-600">ABOUT</p>
        <h1 className="mt-6 font-serif text-3xl font-medium leading-snug text-plum-900">
          Épanouie について
        </h1>
        <p className="mx-auto mt-8 max-w-xl leading-loose text-plum-500">
          「Épanouie（エパノウイ）」は、フランス語で
          <span className="text-plum-900">「花開いた、満ち足りた」</span>
          という意味の言葉です。
          <br />
          35歳からの毎日を生きる、ひとりの女性のための自己肯定感メディアとして生まれました。
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-serif text-2xl font-medium text-plum-900">
          わたしたちが大切にしていること
        </h2>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <div
              key={value.title}
              className="rounded-2xl border border-plum-100 bg-white/70 p-7 text-center"
            >
              <div className="text-4xl" aria-hidden>
                {value.emoji}
              </div>
              <h3 className="mt-4 font-serif text-lg text-plum-900">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-plum-500">
                {value.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-3xl bg-gradient-to-br from-plum-900 to-plum-700 px-8 py-14 text-center text-cream">
        <p className="font-serif text-2xl leading-relaxed">
          35歳から、本当の自分が咲く。
        </p>
        <p className="mx-auto mt-5 max-w-md text-sm leading-loose text-plum-200">
          焦らなくて、大丈夫。あなたの季節は、これからゆっくりと巡っていきます。
          Épanouieは、その道のりにそっと寄り添いつづけます。
        </p>
        <Link
          href="/articles"
          className="mt-8 inline-block rounded-full bg-lavender-500 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-lavender-600"
        >
          読みものを見る
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;
