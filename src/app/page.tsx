"use client";
import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { ServiceCard } from "@/app/components/sections/ServiceCard";
import { Contact } from "@/app/components/sections/Contact";
import { services } from "@/lib/services";
import { RotationLogo } from "@/app/components/animations/RotationLogo";
import { BackgroundBlobs } from "@/app/components/animations/BackgroundBlobs";
import { CustomCursor } from "@/app/components/ui/CustomCursor";
import { Settings } from "lucide-react";

export default function Home() {
  const [showContent, setShowContent] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <main className="relative bg-white min-h-screen cursor-none">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-pop-yellow via-pop-pink to-pop-blue origin-left z-[100]"
        style={{ scaleX }}
      />

      <RotationLogo onAnimationComplete={handleAnimationComplete} />
      
      <div className={showContent ? "animate-fade-in" : "opacity-0"}>
        <BackgroundBlobs />
        <Hero showContent={showContent} />
        <About />
        
        <section id="services" className="py-16 md:py-32 relative overflow-hidden bg-slate-50">
           {/* 背景装飾 */}
           <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[800px] bg-pop-pink rounded-full mix-blend-multiply filter blur-3xl opacity-5 pointer-events-none" />
           
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-12 md:mb-24">
              <h2 className="text-4xl md:text-7xl font-black font-montserrat text-black mb-6 md:mb-8 tracking-tighter relative inline-block">
                Services
                <span className="absolute -top-4 -right-8 md:-top-6 md:-right-12 text-pop-pink animate-spin-slow hidden md:inline-block">
                  <Settings className="h-10 w-10 md:h-16 md:w-16" strokeWidth={1.5} />
                </span>
              </h2>
              <p className="text-base md:text-2xl text-slate-700 max-w-3xl mx-auto font-bold">
                お客様の課題解決に向けた、<br />
                最適なソリューションをご提供します。
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={index} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>
        
        <Contact />
      </div>
    </main>
  );
}
