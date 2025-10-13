import { Card } from "@/components/ui/card"
import Image from "next/image"

export function About() {
  const strengths = [
    {
      title: "ワンストップソリューション",
      description: "SNS戦略立案から映像制作、編集、機材レンタルまで、コンテンツ制作の全工程をワンストップでサポート。一貫性のある高品質なクリエイティブを提供します。"
    },
    {
      title: "データに基づく戦略提案",
      description: "市場調査やデータ分析に基づき、お客様のビジネス目標達成に直結する戦略を策定。感覚だけに頼らない、成果の出るアプローチを重視します。"
    },
    {
      title: "プロフェッショナルな制作体制",
      description: "経験豊富な専門スタッフと最新の撮影・編集機材を駆使し、企画から納品までハイクオリティな映像制作を実現します。"
    },
    {
      title: "柔軟なカスタマイズ対応",
      description: "お客様一人ひとりの課題やご予算に合わせて、サービス内容を柔軟にカスタマイズ。最適なソリューションをオーダーメイドでご提案します。"
    }
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 tracking-tight">
              About Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              私たちは、デジタル時代のコンテンツパートナーとして、お客様の「伝えたい」想いをカタチにし、ビジネスの成長を加速させるお手伝いをします。
            </p>
          </div>

          {/* 代表挨拶 */}
          <div className="mb-20">
             <Card className="p-8 bg-card/50 backdrop-blur flex flex-col items-center gap-8 text-center">
                <div className="w-40 h-40 rounded-full flex-shrink-0 overflow-hidden">
                    <Image
                        src="/assets/kajiwara_hideo_icon.png"
                        alt="代表取締役 梶原英生"
                        width={160}
                        height={160}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="max-w-2xl">
                   <h3 className="text-2xl font-semibold mb-4 text-primary">代表挨拶</h3>
                   <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-left">
                     {`私たちのホームページに訪れていただき、誠にありがとうございます。
代表の梶原英生です。

現代は、誰もが発信者となり、想いを世界中に届けられる素晴らしい時代です。しかし、溢れる情報の中で本当に価値あるメッセージを届け、人の心を動かすことは容易ではありません。

私たちデューフィルム株式会社は、そんなデジタル時代におけるお客様の最高のパートナーとなるべく創業いたしました。私たちの使命は、お客様一人ひとりが胸に秘めた「伝えたい」という純粋な想いを、プロフェッショナルな技術とクリエイティビティによって、最も伝わる「カタチ」にすることです。

SNSの戦略立案から、心に響く映像制作、細部までこだわり抜いた動画編集まで。私たちはデータに基づく緻密な戦略と、長年培ってきた表現力で、お客様のビジネスがまだ見ぬステージへと飛躍するお手伝いをいたします。

お客様の物語に深く寄り添い、共に悩み、共に喜びを分かち合える。そんな血の通ったパートナーシップを、私たちは何よりも大切にしています。

このウェブサイトが、皆様との素晴らしい出会いのきっかけとなることを心より願っております。`}
                   </p>
                </div>
             </Card>
          </div>


          {/* 会社概要 */}
          <div className="mb-20">
            <Card className="p-8 bg-card/50 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-8 text-primary text-center">会社概要</h3>
              <div className="space-y-6">
                <div className="flex flex-col md:flex-row">
                  <h4 className="font-semibold w-full md:w-1/4 mb-1 md:mb-0">会社名</h4>
                  <p className="text-muted-foreground w-full md:w-3/4">デューフィルム株式会社</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h4 className="font-semibold w-full md:w-1/4 mb-1 md:mb-0">創業</h4>
                  <p className="text-muted-foreground w-full md:w-3/4">2022年1月</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h4 className="font-semibold w-full md:w-1/4 mb-1 md:mb-0">代表者名</h4>
                  <p className="text-muted-foreground w-full md:w-3/4">梶原英生</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h4 className="font-semibold w-full md:w-1/4 mb-1 md:mb-0">資本金</h4>
                  <p className="text-muted-foreground w-full md:w-3/4">500万円</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h4 className="font-semibold w-full md:w-1/4 mb-1 md:mb-0">所在地</h4>
                  <p className="text-muted-foreground w-full md:w-3/4">〒107-0062 東京都港区南青山2丁目2番15号 Win Aoyama ビル UCF635</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h4 className="font-semibold w-full md:w-1/4 mb-1 md:mb-0">メールアドレス</h4>
                  <p className="text-muted-foreground w-full md:w-3/4">info@diwfilm.com</p>
                </div>
                <div className="flex flex-col md:flex-row">
                  <h4 className="font-semibold w-full md:w-1/4 mb-1 md:mb-0">事業内容</h4>
                  <p className="text-muted-foreground w-full md:w-3/4">
                    SNSコンサルティング事業<br />
                    映像制作・動画編集事業<br />
                    撮影機材レンタル事業
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* 私たちの強み */}
          <div>
            <h3 className="text-3xl font-semibold text-center mb-12 text-primary">
              Our Strengths
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {strengths.map((strength, index) => (
                <Card key={index} className="p-8 hover:shadow-lg transition-shadow duration-300">
                  <div>
                    <h4 className="font-semibold mb-3 text-xl text-primary">{strength.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{strength.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
