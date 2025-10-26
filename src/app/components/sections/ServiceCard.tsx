import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

// ServiceCardコンポーネントが受け取るpropsの型を定義します
interface Service {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <Card
      className="overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
    >
      <div className="w-full h-64 bg-muted">
        <img src={service.imageUrl} alt={service.title} className="w-full h-full object-cover" />
      </div>
      <div className="p-8 flex-grow flex flex-col">
        <h3 className="text-2xl font-semibold mb-4 text-primary">
          {service.title}
        </h3>
        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
          {service.description}
        </p>

        {/* 特徴リスト */}
        <div className="mb-8">
          <ul className="text-sm text-muted-foreground space-y-2">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAボタン */}
        <Button
          asChild
          className="w-full mt-auto bg-primary hover:bg-primary/90"
        >
          <a href={`/products#service-detail-${index}`}>詳細を見る</a>
        </Button>
      </div>
    </Card>
  )
}
