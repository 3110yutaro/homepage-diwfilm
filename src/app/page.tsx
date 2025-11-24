"use client";
import { useState } from "react";
import { Hero } from "@/app/components/sections/Hero";
import { About } from "@/app/components/sections/About";
import { ServiceCard } from "@/app/components/sections/ServiceCard";
import { Contact } from "@/app/components/sections/Contact";
import { services } from "@/lib/services";
import { RotationLogo } from "@/app/components/animations/RotationLogo";
import { BackgroundBlobs } from "@/app/components/animations/BackgroundBlobs";

export default function Home() {
  const [showContent, setShowContent] = useState(false);

  const handleAnimationComplete = () => {
    setShowContent(true);
  };

  return (
    <main className="relative bg-noise min-h-screen">
      <RotationLogo onAnimationComplete={handleAnimationComplete} />
      <div className={showContent ? "animate-fade-in" : "opacity-0"}>
        <BackgroundBlobs />
        <Hero showContent={showContent} />
        <About />
        <section id="services" className="py-20 md:py-32 relative overflow-hidden">
           {/* 背景装飾 */}
           <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-vivid-pink rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" />
           
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-black font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-vivid-pink to-vivid-yellow mb-6 tracking-tighter drop-shadow-sm">
                Services
              </h2>
              <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
                お客様の課題解決に向けた、<br className="hidden md:block" />
                最適なソリューションをご提供します。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
