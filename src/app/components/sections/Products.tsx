import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "./ServiceCard"

export function Products() {
  const services = [
    {
      title: "SNSコンサルティング",
      description: "戦略策定から実行までを一気通貫で支援し、貴社のSNSマーケティングを成功に導く総合的なパートナーです。",
      features: ["戦略立案と目標設定", "ターゲット分析", "コンテンツ企画", "広告運用サポート", "データ分析"],
      imageUrl: "/assets/meeting_image.png"
    },
    {
      title: "映像制作サービス",
      description: "貴社の「伝えたい」想いを、プロの技術とクリエイティビティで最高の映像作品として具現化します。",
      features: ["企画・構成案の立案", "プロフェッショナルな撮影", "ドローン撮影・特殊撮影", "アニメーション・CG制作", "完成後の活用アドバイス"],
      imageUrl: "/assets/shooting_image.jpg"
    },
    {
      title: "動画編集サービス",
      description: "お客様がお持ちの素材を、視聴者が最後まで見たくなる魅力的な「コンテンツ」へと生まれ変わらせます。",
      features: ["カット編集", "テロップ・字幕挿入", "BGM・効果音", "カラーグレーディング", "YouTubeサムネイル制作"],
      imageUrl: "/assets/edit_image.jpg"
    },
    {
        title: "撮影機材のレンタルサービス",
        description: "ハイクオリティな映像制作を、手軽に、そしてリーズナブルに実現するための機材環境を提供します。",
        features: ["幅広い機材ラインナップ", "レンズ・周辺機器の充実", "ドローン・特殊機材", "徹底したメンテナンス", "柔軟なレンタル期間"],
        imageUrl: "/assets/rental_image.jpg"
    }
  ]

  const serviceDetails = [
    {
        title: "SNSコンサルティングサービス",
        points: [
            "戦略立案と目標設定: 貴社のビジネス課題や目標に基づき、最適なSNSプラットフォームを選定し、具体的な運用目的・KPIを設定します。",
            "ターゲット分析と市場調査: 潜在顧客の行動パターンや競合他社の動向を徹底的に分析し、効果的なアプローチ戦略を策定します。",
            "コンテンツ企画・制作サポート: ターゲットの興味を惹きつけ、エンゲージメントを高めるための投稿内容の企画や制作をアドバイスまたは代行します。",
            "運用体制構築とポリシー策定: スムーズな日々の運用を実現するためのマニュアル作成や、炎上リスクを回避するための運用ポリシー策定を支援します。",
            "広告運用サポート: SNS広告の戦略立案から効果検証までを一貫してサポートし、費用対効果の最大化を目指します。",
            "データ分析とレポーティング: パフォーマンスを定期的に詳細分析し、具体的な改善策をレポートとして提示します。"
        ]
    },
    {
        title: "映像制作サービス",
        points: [
            "企画・構成案の立案: 視聴者の心に響く企画と構成案をゼロから制作します。",
            "台本・絵コンテ作成: 制作する映像のイメージを共有するため、詳細な台本や絵コンテを作成します。",
            "プロフェッショナルな撮影: 経験豊富なスタッフが、高品質なカメラ機材を駆使して撮影を実行します。",
            "ドローン撮影・特殊撮影対応: ドローンを用いた空撮や、ハイスピード撮影など、インパクトのある特殊な撮影にも対応可能です。",
            "アニメーション・CG制作: サービス内容を分かりやすく伝えるアニメーション動画や、高度なCG制作も手掛けます。",
            "完成後の活用アドバイス: 制作した映像を最も効果的に活用するためのプロモーション戦略についてアドバイスします。"
        ]
    },
    {
        title: "動画編集サービス",
        points: [
            "素材の選定・カット編集: 最も伝えたい情報が際立つようにテンポ良く繋ぎ合わせる洗練されたカット編集を行います。",
            "テロップ・字幕の挿入: 視認性の高いデザインで、視聴者に内容が確実に伝わるよう、効果的にテロップ・字幕を挿入します。",
            "BGM・効果音（SE）の選定と挿入: 映像のテーマや雰囲気に合わせたBGMを選定し、視聴体験を豊かにします。",
            "カラーグレーディング・色調補正: 映像全体の色味を調整し、統一感と高品質なプロの仕上がりを実現します。",
            "モーショングラフィックス制作: 複雑な情報を、動きのある図形やテキストで分かりやすく表現するアニメーションを作成します。",
            "YouTubeサムネイルの制作: 動画クリック率の向上に直結する、魅力的で訴求力のあるサムネイル画像をデザインします。"
        ]
    },
    {
        title: "撮影機材のレンタルサービス",
        points: [
            "幅広い機材ラインナップ: プロ仕様の最新デジタル一眼レフカメラ、ミラーレスカメラ、プロフェッショナルビデオカメラを豊富に取り揃えています。",
            "レンズ・周辺機器の充実: 三脚、照明機材、外付けマイク、ジンバルなど、撮影に必要な周辺機器を一式レンタル可能です。",
            "ドローン・特殊機材の提供: 空撮用ドローンやアクションカメラなど、専門的な撮影に対応できる特殊機材も取り扱っています。",
            "徹底したメンテナンス: レンタル機材はすべて、専門スタッフが入念な点検とクリーニングを実施し、万全の状態で提供します。",
            "機材選定のアドバイス: 用途や予算に応じて最適な機材を専門スタッフがご提案します。",
            "初心者からプロまで対応: 個人でのイベント撮影から、法人様の本格的な映像制作まで、あらゆるレベルのお客様にご利用いただけます。"
        ]
    }
  ]

  return (
    <section id="products" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gradient mb-4 tracking-tight">
              Our Services
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              お客様のビジネス課題を解決するため、SNSマーケティングから映像制作、機材レンタルまで、高品質なサービスをワンストップで提供します。
            </p>
          </div>

          {/* サービスカード */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>

          {/* サービス詳細セクション */}
          <div id="service-details" className="mt-24 pt-16 border-t">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 tracking-tight">
                    サービス詳細
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                    各サービスの提供内容について、さらに詳しくご紹介します。
                </p>
            </div>

            <div className="space-y-16">
                {serviceDetails.map((detail, index) => (
                    <div key={index} id={`service-detail-${index}`} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center pt-8">
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <h3 className="text-2xl font-semibold text-primary mb-4">{detail.title}</h3>
                                <div className="w-full h-64 bg-muted rounded-lg">
                                    <img src={services[index].imageUrl} alt={detail.title} className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <ul className="space-y-6">
                                {detail.points.map((point, pIndex) => {
                                    const [title, description] = point.split(': ');
                                    return (
                                        <li key={pIndex} className="p-4 border-l-4 border-primary bg-muted/40 rounded-r-lg">
                                            <h4 className="font-semibold text-lg mb-1">{title}</h4>
                                            <p className="text-muted-foreground">{description}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
