"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { services } from "@/lib/services";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Wrench, Lightbulb, Settings } from "lucide-react";

export function Products() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);

  return (
    <div ref={containerRef} className="relative overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-pop-yellow/10">
        <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-20 right-[10%] animate-bounce delay-700 pointer-events-none select-none opacity-50 text-pop-blue"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Wrench size={96} strokeWidth={1.5} />
        </motion.div>
        <motion.div 
          className="absolute bottom-10 left-[5%] animate-pulse pointer-events-none select-none opacity-50 text-pop-yellow"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Lightbulb size={128} strokeWidth={1.5} />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-6xl md:text-9xl font-black font-montserrat text-black mb-6 tracking-tighter relative inline-block">
              OUR SERVICES
              <span className="absolute -top-4 -right-12 text-pop-pink animate-spin-slow">
                <Settings size={64} strokeWidth={1.5} />
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-bold mt-8 leading-relaxed">
              <span className="bg-pop-pink/20 px-2">SNSマーケティング</span>から
              <span className="bg-pop-blue/20 px-2">映像制作</span>まで。<br />
              あなたのビジネスを加速させる、<br className="md:hidden" />
              クリエイティブなソリューション。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Details */}
      <div className="relative">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const colors = ['bg-pop-yellow', 'bg-pop-pink', 'bg-pop-blue', 'bg-pop-green'];
          const accentColor = colors[index % colors.length];
          
          return (
            <section 
              key={index} 
              id={`service-detail-${index}`}
              className={`py-32 relative ${isEven ? 'bg-white' : 'bg-slate-50'}`}
            >
              {/* Background Decoration */}
              <div className={`absolute top-0 ${isEven ? 'right-0' : 'left-0'} w-1/2 h-full ${accentColor} opacity-5 pointer-events-none`} />
              
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>
                  
                  {/* Image Side */}
                  <motion.div 
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, x: isEven ? -50 : 50, rotate: isEven ? -2 : 2 }}
                    whileInView={{ opacity: 1, x: 0, rotate: isEven ? -2 : 2 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ type: "spring", stiffness: 50 }}
                  >
                    <div className={`relative aspect-[4/3] w-full rounded-[2rem] border-4 border-black shadow-neo-xl overflow-hidden bg-white transform hover:scale-[1.02] transition-transform duration-500`}>
                      <Image
                        src={service.imageUrl}
                        alt={service.detailTitle}
                        fill
                        className="object-cover"
                      />
                      <div className={`absolute inset-0 ${accentColor} mix-blend-multiply opacity-20`} />
                      
                      {/* Sticker */}
                      <div className="absolute -top-6 -right-6 w-24 h-24 bg-white border-4 border-black rounded-full flex items-center justify-center transform rotate-12 shadow-md z-10">
                        <span className="font-black text-2xl">#{index + 1}</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Text Side */}
                  <motion.div 
                    className="w-full lg:w-1/2"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 50 }}
                  >
                    <h2 className={`text-4xl md:text-5xl font-black mb-8 text-black leading-tight`}>
                      <span className={`inline-block px-4 py-1 ${accentColor} border-4 border-black shadow-pop transform ${isEven ? '-rotate-1' : 'rotate-1'}`}>
                        {service.detailTitle}
                      </span>
                    </h2>
                    
                    <div className="space-y-8">
                      {service.points.map((point, pIndex) => {
                        const [title, description] = point.split(': ');
                        return (
                          <motion.div 
                            key={pIndex}
                            className="bg-white p-6 rounded-2xl border-4 border-black shadow-sm hover:shadow-pop transition-shadow"
                            whileHover={{ scale: 1.02, rotate: isEven ? 1 : -1 }}
                          >
                            <h3 className="font-black text-xl mb-2 flex items-center">
                              <span className={`inline-flex items-center justify-center w-8 h-8 rounded-full ${accentColor} border-2 border-black mr-3 text-sm`}>
                                {pIndex + 1}
                              </span>
                              {title}
                            </h3>
                            <p className="text-slate-700 font-medium pl-11 leading-relaxed">
                              {description}
                            </p>
                          </motion.div>
                        );
                      })}
                    </div>

                    <div className="mt-12">
                        <Button asChild className={`bg-black text-white hover:bg-slate-800 text-lg px-8 py-6 rounded-full font-bold shadow-neo hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all`}>
                            <Link href="/contact">
                                このサービスについて相談する
                            </Link>
                        </Button>
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>
    </div>
  )
}
