import { Card } from "@/components/ui/card"

export function About() {
  const features = [
    {
      title: "国際的な視野",
      description: "グローバルな市場動向を常に把握し、日本企業に最適な戦略を提供します。",
      icon: "🌍"
    },
    {
      title: "日本品質のサービス",
      description: "細やかな気配りと丁寧な対応で、お客様の満足度を最優先に考えます。",
      icon: "⭐"
    },
    {
      title: "技術革新",
      description: "最新テクノロジーを活用し、効率的で革新的なソリューションを提供します。",
      icon: "🚀"
    },
    {
      title: "長期的なパートナーシップ",
      description: "一時的な取引ではなく、長期的な信頼関係を築くことを重視しています。",
      icon: "🤝"
    }
  ]

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              About Yohji International
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              私たちは、国際的な視野と日本的な細やかさを組み合わせ、
              お客様のビジネス成長をサポートするパートナーです。
            </p>
          </div>

          {/* 会社概要 */}
          <div className="mb-16">
            <Card className="p-8 bg-card/50 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-6 text-primary">会社概要</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold mb-2">設立</h4>
                  <p className="text-muted-foreground">2020年4月</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">代表者</h4>
                  <p className="text-muted-foreground">Yohji Saito</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">所在地</h4>
                  <p className="text-muted-foreground">東京都渋谷区</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">事業内容</h4>
                  <p className="text-muted-foreground">
                    国際ビジネスコンサルティング<br />
                    デジタルマーケティング支援<br />
                    技術開発・システム構築
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* 特徴 */}
          <div>
            <h3 className="text-2xl font-semibold text-center mb-12 text-primary">
              私たちの強み
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex items-start space-x-4">
                    <div className="text-3xl">{feature.icon}</div>
                    <div>
                      <h4 className="font-semibold mb-2 text-lg">{feature.title}</h4>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
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
