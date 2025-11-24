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
    <section id="home" className="relative min-h-screen pt-32 pb-12 overflow-hidden flex items-center justify-center bg-white">
      {/* Background Decor */}
      <div className="absolute top-20 right-[-10%] w-96 h-96 bg-pop-yellow rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-pop-pink rounded-full blur-3xl opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center md:text-left">
          <motion.div
            className="inline-block px-4 py-2 bg-pop-blue border-2 border-black rounded-full mb-6 transform -rotate-2 shadow-neo-hover"
            initial={{ opacity: 0, y: 20, rotate: -5 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            transition={{ delay: baseDelay + 0.2, type: "spring", stiffness: 100, damping: 20 }}
          >
            <span className="font-bold text-white tracking-widest">VIDEO PRODUCTION</span>
          </motion.div>
          <motion.h1
            className="font-pop text-6xl md:text-8xl leading-[0.9] text-pop-black mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.4, type: "spring", stiffness: 100, damping: 20 }}
          >
            <span className="text-pop-black">WE MAKE</span> <br />
            <span className="text-pop-pink relative inline-block">
              IT MOVE
              <svg className="absolute -bottom-4 left-0 w-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="black" strokeWidth="4" fill="none" />
              </svg>
            </span>
            <span className="text-pop-yellow">!</span>
          </motion.h1>
          <motion.p
            className="font-body text-lg md:text-xl text-gray-700 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.8, type: "spring", stiffness: 100, damping: 20 }}
          >
            あなたの「伝えたい」を、世界一ワクワクするカタチに。<br />
            DIW FILMは、遊び心と確かな技術で、ビジネスを加速させる映像パートナーです。
          </motion.p>

          {/* ナビゲーションカード */}
          <div className="mt-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
        </div>

        {/* Visual Content - Playful Abstract Composition (今回は変更しない) */}
        <div className="relative h-[400px] md:h-[600px] flex items-center justify-center">
            <div className="relative w-full max-w-md aspect-square">
                 {/* Main circle */}
                 <div className="absolute inset-0 bg-pop-purple rounded-full border-4 border-black overflow-hidden flex items-center justify-center group shadow-neo-lg">
                    {/* Placeholder for video reel or key visual */}
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/800/800?random=1')] bg-cover bg-center opacity-80 group-hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-black/20"></div>
                    
                    {/* Floating elements inside */}
                    <div className="relative z-10 text-white text-center p-6">
                        <div className="w-20 h-20 bg-white rounded-full mx-auto mb-4 border-2 border-black flex items-center justify-center text-pop-black animate-bounce">
                            {/* <Icons.Video /> */} {/* Icons.Video は未定義のためコメントアウト */}
                        </div>
                        <h3 className="font-pop text-3xl">Creative</h3>
                    </div>
                 </div>

                 {/* Decorative floating shapes */}
                 <div className="absolute -top-6 -right-6 w-24 h-24 bg-pop-yellow rounded-xl border-2 border-black flex items-center justify-center text-4xl shadow-neo animate-[bounce_3s_infinite]">
                    🎬
                 </div>
                 <div className="absolute bottom-10 -left-10 w-32 h-16 bg-pop-blue rounded-full border-2 border-black flex items-center justify-center shadow-neo">
                    <span className="font-bold text-white">Action!</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  )
}
