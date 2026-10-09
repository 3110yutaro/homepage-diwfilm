import { BookOpenText, Clapperboard } from "lucide-react";

const products = [
  {
    number: "01",
    category: "LEARNING",
    title: "英語でポン",
    catchphrase: "出会った英語を、次に使う力へ。",
    description:
      "英語の映像や字幕で出会った言葉を、自分の語彙と文脈の記録に戻す学習サービスです。その記録を次の字幕や今日の一歩につなげるWeb／Chrome版を開発しています。PicWordと「言えたら」も、関連する学びの体験として育てています。",
    status: "Web／Chrome版を開発・検証中",
    icon: BookOpenText,
    color: "bg-pop-yellow",
    background: "bg-pop-yellow/10",
  },
  {
    number: "02",
    category: "CREATIVE TOOLS",
    title: "映像制作・編集支援ツール",
    catchphrase: "撮影素材を、編集できる状態へ。",
    description:
      "実素材の文字起こしから、質問・話題の整理、字幕確認、Final Cut Pro 用の編集データの受け渡しまでを支える社内向けツールです。編集者が各工程を確かめながら実際の制作に使い、改善を続けています。",
    status: "社内で検証・改善中",
    icon: Clapperboard,
    color: "bg-pop-blue",
    background: "bg-pop-blue/10",
  },
];

export function DevelopingProducts() {
  return (
    <section id="in-development" className="relative scroll-mt-24 bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-4xl md:mb-14">
          <span className="inline-block rounded-full border-2 border-black bg-pop-pink px-4 py-1 text-sm font-black text-black">
            IN DEVELOPMENT
          </span>
          <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-black md:text-6xl">
            現場から生まれる、<br className="hidden sm:block" />新しい道具。
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
            デューフィルム株式会社は、映像制作に加えて、学ぶ時間とつくる時間を支える２つのプロダクトを開発しています。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map(({ number, category, title, catchphrase, description, status, icon: Icon, color, background }) => (
            <article
              key={title}
              className={`relative overflow-hidden rounded-[2rem] border-4 border-black p-7 shadow-neo md:p-10 ${background}`}
            >
              <div className="mb-8 flex items-start justify-between gap-4">
                <div className={`flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black ${color}`}>
                  <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
                </div>
                <span aria-hidden="true" className="text-6xl font-black leading-none text-black/10 md:text-7xl">
                  {number}
                </span>
              </div>
              <p className="text-xs font-black tracking-[0.2em] text-slate-600">{category}</p>
              <h3 className="mt-2 text-2xl font-black text-black md:text-3xl">{title}</h3>
              <p className="mt-5 text-xl font-black text-black">{catchphrase}</p>
              <p className="mt-4 font-medium leading-relaxed text-slate-700">
                {description}
              </p>
              <p className="mt-8 inline-block rounded-full border-2 border-black bg-white px-4 py-1 text-sm font-bold text-black">
                {status}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 max-w-4xl text-sm font-medium leading-relaxed text-slate-600">
          AIによる提案や自動化も、人が内容を確認し、必要に応じて直せる工程として検証しています。
        </p>
      </div>
    </section>
  );
}
