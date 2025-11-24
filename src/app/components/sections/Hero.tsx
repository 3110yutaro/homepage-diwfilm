"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RotatingVisionText } from '@/app/components/animations/RotatingVisionText';
import { FlowingText } from '@/app/components/animations/FlowingText';

interface HeroProps {
  showContent: boolean;
}

const features = [
  {
    name: 'About Us',
    description: '私たちについて',
    imageSrc: '/assets/aboutus_button.png',
    href: '/about',
    color: 'bg-vivid-yellow',
    rotate: -2,
  },
  {
    name: 'Service',
    description: 'サービス紹介',
    imageSrc: '/assets/service_button.jpg',
    href: '/products',
    color: 'bg-vivid-pink',
    rotate: 1,
  },
  {
    name: 'Contact',
    description: 'お問い合わせ',
    imageSrc: '/assets/ask_button.jpg',
    href: '/contact',
    color: 'bg-vivid-blue',
    rotate: -1,
  },
];

export function Hero({ showContent }: HeroProps) {
  const baseDelay = showContent ? 1.7 : 0;

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-vivid-yellow rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
        <div className="absolute top-40 right-10 w-32 h-32 bg-vivid-pink rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        <div className="absolute bottom-20 left-1/3 w-48 h-48 bg-vivid-blue rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="hidden md:block absolute top-20 left-10 opacity-20">
            <RotatingVisionText />
          </div>
          
          <div className="mb-6">
            <FlowingText
              text="Our Vision"
              className="text-xl md:text-2xl font-bold text-vivid-blue tracking-widest uppercase mb-2"
              initialDelay={baseDelay + 0.2}
            />
          </div>
          
          <div className="mb-8">
            <FlowingText
              text="限りなく純粋な、映像を。"
              className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-tight"
              initialDelay={baseDelay + 0.5}
            />
          </div>

          <div className="space-y-2">
            <FlowingText
              text="DIW Film."
              className="text-xl md:text-2xl font-medium text-slate-600"
              initialDelay={baseDelay + 1.2}
            />
            <FlowingText
              text="De-Ionized Waterのように、澄んだ感動を。"
              className="text-lg md:text-xl text-slate-500"
              initialDelay={baseDelay + 1.5}
            />
          </div>
        </div>

        {/* ナビゲーションカード */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: baseDelay + 2 + index * 0.2, type: "spring", stiffness: 50 }}
              whileHover={{ 
                scale: 1.05, 
                rotate: feature.rotate * -2,
                boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)"
              }}
              className="relative group"
            >
              <Link href={feature.href} className="block h-full">
                <div className={`relative h-80 w-full rounded-3xl overflow-hidden border-4 border-black shadow-pop transition-all duration-300 ${feature.color}`}>
                  <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={feature.imageSrc}
                      alt={feature.name}
                      fill
                      className="object-cover mix-blend-overlay"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
                  
                  <div className="absolute bottom-0 left-0 p-6 w-full bg-white/90 backdrop-blur-sm border-t-4 border-black transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-black text-black uppercase tracking-tighter">{feature.name}</h3>
                    <p className="text-sm font-bold text-slate-600 mt-1">{feature.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
