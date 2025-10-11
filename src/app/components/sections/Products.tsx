import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Products() {
  const products = [
    {
      title: "ビジネスコンサルティング",
      description: "国際市場への展開をサポートする包括的なコンサルティングサービス。市場調査から戦略立案まで一貫して支援します。",
      features: ["市場調査", "戦略立案", "実行支援", "フォローアップ"],
      price: "お問い合わせください",
      popular: true
    },
    {
      title: "デジタルマーケティング",
      description: "オンラインでの効果的なマーケティング戦略を構築。SNS、SEO、コンテンツマーケティングを統合的に支援します。",
      features: ["SNS運用", "SEO対策", "コンテンツ作成", "広告運用"],
      price: "月額 50万円〜",
      popular: false
    },
    {
      title: "システム開発",
      description: "お客様のビジネスニーズに合わせたカスタムシステム開発。Webアプリケーションからモバイルアプリまで対応します。",
      features: ["要件定義", "設計・開発", "テスト", "保守・運用"],
      price: "100万円〜",
      popular: false
    }
  ]

  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              サービス・製品
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              お客様のビジネス成長をサポートする様々なサービスを提供しています。
              ニーズに合わせて最適なソリューションをご提案します。
            </p>
          </div>

          {/* 製品カード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className={`relative p-8 hover:shadow-xl transition-all duration-300 ${
                  product.popular ? 'border-primary shadow-lg scale-105' : ''
                }`}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-purple text-white px-4 py-1 rounded-full text-sm font-medium">
                      おすすめ
                    </span>
                  </div>
                )}

                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-primary">
                    {product.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* 特徴リスト */}
                  <div className="mb-6">
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {product.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center">
                          <span className="text-primary mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 価格 */}
                  <div className="mb-6">
                    <p className="text-2xl font-bold text-primary">{product.price}</p>
                  </div>

                  {/* CTAボタン */}
                  <Button
                    className={`w-full ${
                      product.popular
                        ? 'bg-gradient-purple hover:opacity-90 text-white'
                        : 'bg-primary hover:bg-primary/90'
                    }`}
                  >
                    詳細を見る
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* お問い合わせCTA */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-gradient-purple text-white">
              <h3 className="text-2xl font-semibold mb-4">
                その他のサービスもございます
              </h3>
              <p className="mb-6 opacity-90">
                上記以外のサービスについても、お気軽にお問い合わせください。
                お客様のニーズに合わせて最適なソリューションをご提案いたします。
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="bg-white text-primary hover:bg-white/90"
              >
                お問い合わせはこちら
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
