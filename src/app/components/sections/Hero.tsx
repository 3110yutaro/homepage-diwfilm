"use client";

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Sparkles, Rocket } from 'lucide-react';

interface HeroProps {
  showContent: boolean;
}

const features = [
  {
    name: 'About Us',
    description: '私たちについて',
    imageSrc: '/assets/aboutus_button.png',
    href: '/about',
    color: 'bg-pop-yellow',
    rotate: -3,
    delay: 0,
  },
  {
    name: 'Service',
    description: 'サービス紹介',
    imageSrc: '/assets/service_button.jpg',
    href: '/products',
    color: 'bg-pop-pink',
    rotate: 2,
    delay: 0.1,
  },
  {
    name: 'Contact',
    description: 'お問い合わせ',
    imageSrc: '/assets/ask_button.jpg',
    href: '/contact',
    color: 'bg-pop-blue',
    rotate: -2,
    delay: 0.2,
  },
];

export function Hero({ showContent }: HeroProps) {
  const containerRef = useRef(null);

  const baseDelay = showContent ? 1.7 : 0;

  return (
    <section ref={containerRef} id="home" className="relative min-h-screen pt-20 pb-16 lg:pt-32 lg:pb-20 w-full max-w-full overflow-x-hidden flex items-center justify-center bg-white">
      {/* Background Patterns */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-pop-yellow/10 to-transparent pointer-events-none" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-2 sm:left-[10%] animate-bounce delay-700 pointer-events-none select-none text-pop-yellow z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 1 }}
      >
        <Sparkles className="w-12 h-12 sm:w-16 sm:h-16" strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        className="absolute bottom-40 right-2 sm:right-[5%] animate-pulse pointer-events-none select-none text-pop-blue z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: baseDelay + 1.2 }}
      >
        <Rocket className="w-16 h-16 sm:w-24 sm:h-24" strokeWidth={1.5} />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="text-center lg:text-left relative">
          <motion.div
            className="inline-block px-4 py-2 sm:px-6 sm:py-3 bg-black text-white rounded-full mb-8 transform -rotate-3 shadow-neo-hover border-2 border-white"
            initial={{ opacity: 0, y: 20, rotate: -10 }}
            animate={{ opacity: 1, y: 0, rotate: -3 }}
            transition={{ delay: baseDelay + 0.2, type: "spring", stiffness: 100 }}
          >
            <span className="font-black tracking-wider sm:tracking-widest text-xs sm:text-sm md:text-base whitespace-nowrap">VIDEO PRODUCTION STUDIO</span>
          </motion.div>
          
          <motion.h1
            className="font-black text-4xl sm:text-6xl md:text-8xl leading-[0.9] sm:leading-[0.85] text-black mb-6 sm:mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.4, type: "spring", stiffness: 100 }}
          >
            WE MAKE <br />
            <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-pop-pink to-pop-purple pb-2">
              IT MOVE
              <svg className="absolute -bottom-2 left-0 w-full h-4 text-black" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
              </svg>
            </span>
            <span className="text-pop-yellow inline-block animate-bounce">!</span>
          </motion.h1>

          <motion.p
            className="font-bold text-sm sm:text-lg md:text-2xl text-slate-700 mb-8 sm:mb-12 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: baseDelay + 0.8 }}
          >
            あなたの「伝えたい」を、<br className="md:hidden"/>世界一ワクワクするカタチに。<br />
            <span className="bg-pop-green/30 px-2">遊び心</span>と<span className="bg-pop-blue/30 px-2">確かな技術</span>で、<br />
            ビジネスを加速させる映像パートナー。
          </motion.p>

          {/* Navigation Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto lg:mx-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 50, rotate: feature.rotate }}
                animate={{ opacity: 1, y: 0, rotate: feature.rotate }}
                transition={{ delay: baseDelay + 1 + index * 0.1, type: "spring" }}
                whileHover={{ 
                  scale: 1.1, 
                  rotate: 0,
                  zIndex: 10,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className="relative group"
              >
                <Link href={feature.href} className="block">
                  <div className={`relative aspect-[4/5] w-full rounded-2xl overflow-hidden border-4 border-black shadow-neo transition-all duration-300 ${feature.color}`}>
                    <div className="absolute inset-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply">
                      <Image
                        src={feature.imageSrc}
                        alt={feature.name}
                        fill
                        className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-black/10 group-hover:bg-transparent transition-colors">
                      <div className="bg-white border-2 border-black px-4 py-2 rounded-full shadow-neo-hover transform group-hover:scale-110 transition-transform">
                        <span className="font-black text-black uppercase text-sm">{feature.name}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Visual Content - Appears below text on mobile */}
        <motion.div 
          className="relative w-full aspect-square lg:aspect-auto lg:h-[700px] flex items-center justify-center mt-12 lg:mt-0 py-10 lg:py-0"
        >
            <div className="relative w-full max-w-lg aspect-square">
                 {/* Main Visual Circle */}
                 <motion.div 
                   className="absolute inset-0 bg-pop-purple rounded-full border-4 border-black overflow-hidden shadow-neo-xl z-10"
                   animate={{ 
                     borderRadius: ["50% 50% 50% 50%", "60% 40% 30% 70%", "40% 60% 70% 30%", "50% 50% 50% 50%"] 
                   }}
                   transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                 >
                    <div className="absolute inset-0 bg-[url('/assets/diwfilm_hero.jpg')] bg-cover bg-center opacity-90 hover:scale-110 transition-transform duration-700"></div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-pop-purple/50 to-transparent mix-blend-overlay"></div>
                 </motion.div>

                 {/* Decorative Elements */}
                 <motion.div 
                   className="absolute -top-5 right-0 sm:-top-10 sm:-right-10 w-32 h-32 sm:w-40 sm:h-40 bg-pop-yellow border-4 border-black rounded-full flex items-center justify-center z-20 shadow-neo"
                   animate={{ y: [0, -10, 0] }}
                   transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 >
                    <span className="font-black text-base sm:text-xl text-center leading-tight">CREATIVE<br/>STUDIO</span>
                 </motion.div>

                 <motion.div 
                   className="absolute bottom-0 left-0 sm:-left-10 w-36 h-20 sm:w-48 sm:h-24 bg-pop-blue border-4 border-black rounded-full flex items-center justify-center z-20 shadow-neo transform -rotate-12"
                   whileHover={{ scale: 1.1, rotate: -5 }}
                 >
                    <span className="font-black text-white text-lg sm:text-2xl">since 2022</span>
                 </motion.div>

                 {/* Sticker Elements */}
                 <div className="absolute top-1/2 -right-20 w-32 h-32 z-0 opacity-50 hidden lg:block">
                    <svg viewBox="0 0 200 200" className="animate-spin-slow w-full h-full">
                      <path id="curve" d="M100,100 m-75,0 a75,75 0 1,1 150,0 a75,75 0 1,1 -150,0" fill="transparent"/>
                      <text width="500">
                        <textPath xlinkHref="#curve" className="text-xl font-bold fill-black tracking-widest">
                          VIDEO PRODUCTION • MOTION GRAPHICS • 
                        </textPath>
                      </text>
                    </svg>
                 </div>
            </div>
        </motion.div>
      </div>
    </section>
  )
}
