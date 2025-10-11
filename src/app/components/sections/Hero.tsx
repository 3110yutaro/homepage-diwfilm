import Image from "next/image"

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background via-background to-muted/20 py-20">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 画像セクション */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-8 mb-20 items-end"> {/* items-endを追加して画像を底揃えにする */}
          <div className="w-full h-96 relative md:col-span-3"> {/* 3/10の幅 */}
            <Image
              src="/assets/hero_yohji.png"
              alt="ヨージの国際交流"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
          <div className="w-full h-[500px] relative md:col-span-7 image-diagonal-fade"> {/* 7/10の幅 */}
            <Image
              src="/assets/hero_yohji2.png"
              alt="ヨージの国際交流2"
              layout="fill"
              objectFit="contain"
              className="rounded-lg"
            />
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-left">
          {/* 新しいメインタイトル */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gradient mb-12 leading-tight">
            「知る」ことが、世界を変える。
            <br />
            現場主義の国際交流
          </h1>

          {/* メインの文章 */}
          <div className="max-w-3xl">
            <p className="text-base text-foreground mb-6 leading-relaxed">
              国際交流の目的は、単なる情報交換ではありません。それは、人と人との心の壁をなくすことです。
            </p>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              ヨージは、海外と日本を「インタビュー」という独自のスタイルでつなぎ、メディアでは伝えきれない生々しい感情や、本音の意見を世界に届けています。固定観念や偏見に縛られがちな現代だからこそ、一歩踏み込んだ「突撃インタビュー」を敢行し、驚くほど多様で、力強い考えに触れています。
            </p>
            <p className="text-base text-foreground mb-6 leading-relaxed">
              僕の原動力は、大好きな日本への想いです。海外からの視点も取り入れながら、私たちが気づいていない日本の魅力や素晴らしさを、この活動を通して再発見しています。
            </p>
            <p className="text-base text-foreground mb-8 leading-relaxed">
              分断を乗り越え、相互理解を深める旅へ。
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mt-12 mb-4">
              侍になろう日本。
            </h2>
            <p className="text-base text-foreground leading-relaxed">
              この言葉を合言葉に、知的好奇心を満たす発信を続けていきます。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
