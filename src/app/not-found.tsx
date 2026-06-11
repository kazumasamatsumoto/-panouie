import { Sparkles } from "@/components/ui/sparkles";
import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <div className="relative mx-auto flex max-w-xl flex-col items-center px-6 py-32 text-center">
      <Sparkles />
      <p className="animate-fade-up text-5xl" aria-hidden>
        🌙
      </p>
      <h1 className="animate-fade-up mt-6 font-serif text-2xl font-medium text-plum-900 [animation-delay:150ms]">
        ページが見つかりませんでした
      </h1>
      <p className="animate-fade-up mt-4 leading-loose text-plum-500 [animation-delay:300ms]">
        探していたページは、まだここにないようです。
        <br />
        よかったら、トップページから巡ってみてください。
      </p>
      <ButtonLink href="/" className="animate-fade-up mt-8 [animation-delay:450ms]">
        ホームへ戻る
      </ButtonLink>
    </div>
  );
}
