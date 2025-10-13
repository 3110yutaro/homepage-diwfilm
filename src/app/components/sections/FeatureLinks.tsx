import Image from 'next/image';
import Link from 'next/link';

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

export function FeatureLinks() {
  return (
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
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 p-6">
              <h3 className="text-2xl font-semibold leading-6 text-white">{feature.name}</h3>
              <p className="mt-2 text-lg text-gray-300">{feature.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
