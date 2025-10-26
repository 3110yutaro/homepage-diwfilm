import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "./ServiceCard"
import { services } from "@/lib/services"

export function Products() {
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
                {services.map((service, index) => (
                    <div key={index} id={`service-detail-${index}`} className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center pt-8">
                        <div className="lg:col-span-2">
                            <div className="sticky top-24">
                                <h3 className="text-2xl font-semibold text-primary mb-4">{service.detailTitle}</h3>
                                <div className="w-full h-64 bg-muted rounded-lg">
                                    <img src={service.imageUrl} alt={service.detailTitle} className="w-full h-full object-cover rounded-lg" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-3">
                            <ul className="space-y-6">
                                {service.points.map((point, pIndex) => {
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
