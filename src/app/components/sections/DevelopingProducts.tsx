import { BookOpenText, Clapperboard } from "lucide-react";

const products = [
  {
    title: "英語学習アプリ",
    description:
      "日本語話者が英語を学び、日常で使うための学習アプリを開発しています。",
    icon: BookOpenText,
    color: "bg-pop-yellow",
  },
  {
    title: "映像制作・編集支援ツール",
    description:
      "文字起こしや字幕、編集データの整理を通じて、映像制作の工程を支えるツールを開発しています。",
    icon: Clapperboard,
    color: "bg-pop-blue",
  },
];

export function DevelopingProducts() {
  return (
    <section id="in-development" className="relative bg-white py-20 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl md:mb-14">
          <span className="inline-block rounded-full border-2 border-black bg-pop-pink px-4 py-1 text-sm font-black text-black">
            開発中
          </span>
          <h2 className="mt-5 text-4xl font-black tracking-tight text-black md:text-6xl">
            In Development
          </h2>
          <p className="mt-5 text-base font-medium leading-relaxed text-slate-700 md:text-lg">
            デューフィルム株式会社は、映像制作に加えて、次の２つのプロダクトを開発しています。
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {products.map(({ title, description, icon: Icon, color }) => (
            <article
              key={title}
              className="rounded-[2rem] border-4 border-black bg-white p-7 shadow-neo md:p-10"
            >
              <div className={`mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border-2 border-black ${color}`}>
                <Icon aria-hidden="true" size={32} strokeWidth={1.8} />
              </div>
              <h3 className="text-2xl font-black text-black md:text-3xl">{title}</h3>
              <p className="mt-4 font-medium leading-relaxed text-slate-700">
                {description}
              </p>
              <p className="mt-6 text-sm font-bold text-slate-600">現在開発中</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
