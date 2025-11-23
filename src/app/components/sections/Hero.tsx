import Image from 'next/image';
import Link from 'next/link';
import { RotatingVisionText } from '@/app/components/animations/RotatingVisionText';
import { FlowingText } from '@/app/components/animations/FlowingText';

const features = [
  {
    name: 'About Us',
    description: '私たちについて',
    imageSrc: '/assets/aboutus_button.png',
    href: '/about',
  },
  {
    name: 'Service',
    description: 'サービス紹介',
    imageSrc: '/assets/service_button.jpg',
    href: '/products',
  },
  {
    name: 'Contact',
    description: 'お問い合わせ',
    imageSrc: '/assets/ask_button.jpg',
    href: '/contact',
  },
];

export function Hero() {
  return (
    <section className="relative bg-transparent">
      <div className="relative z-10 py-36 sm:py-48">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl relative">
            <div className="absolute -top-32 -left-4 hidden md:block">
              <RotatingVisionText />
            </div>
            <FlowingText
              text="Our Vision"
              className="text-base font-semibold leading-7 text-cyan-600"
              initialDelay={0.2}
            />
            <FlowingText
              text="限りなく純粋な、映像を。"
              className="mt-2 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl"
              initialDelay={0.5}
            />
            <div className="mt-6">
              <FlowingText
                text="DIW Film."
                className="text-lg leading-8 text-slate-600"
                initialDelay={1.2}
              />
              <FlowingText
                text="De-Ionized Waterのように、澄んだ感動を。"
                className="text-lg leading-8 text-slate-600"
                initialDelay={1.5}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-background">
        <div className="grid grid-cols-1 md:grid-cols-3">
          {features.map((feature) => (
            <Link key={feature.name} href={feature.href} className="group relative block overflow-hidden">
              <div className="relative h-80 w-full">
                <Image
                  src={feature.imageSrc}
                  alt={feature.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/40 transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="text-2xl font-semibold leading-6 text-white">{feature.name}</h3>
                <p className="mt-2 text-lg text-gray-300">{feature.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
