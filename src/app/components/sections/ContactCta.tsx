import { Button } from "@/components/ui/button"
import Link from 'next/link'

export function ContactCta() {
  return (
    <section className="relative py-24 sm:py-32">
      {/* 背景画像 */}
      <div className="absolute inset-0">
        <img
          src="/assets/ask_button.jpg"
          alt="お問い合わせセクションの背景画像"
          className="w-full h-full object-cover"
        />
        {/* オーバーレイ */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
            未来を映す、お手伝いを。
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-10 leading-relaxed">
            お客様のビジョンをカタチにするための最適なプランをご提案します。
            SNS運用、映像制作、どんなことでも、まずはお気軽にご相談ください。
          </p>
          <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 text-lg px-8 py-6 transform hover:scale-105 transition-transform">
            <Link href="/contact" className="text-black">
              お問い合わせフォームへ
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
