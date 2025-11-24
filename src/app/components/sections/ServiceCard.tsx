"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Star } from "lucide-react";

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
  const colors = ['bg-pop-yellow', 'bg-pop-pink', 'bg-pop-blue', 'bg-pop-green'];
  const accentColor = colors[index % colors.length];
  const rotate = index % 2 === 0 ? -2 : 2;
  
  // ランダムな角丸の生成（固定パターン）
  const borderRadiuses = [
    "rounded-[2rem_1rem_2rem_1rem]",
    "rounded-[1rem_2rem_1rem_2rem]",
    "rounded-[2rem_2rem_1rem_2rem]",
    "rounded-[1rem_2rem_2rem_1rem]"
  ];
  const borderRadius = borderRadiuses[index % borderRadiuses.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotate }}
      whileInView={{ opacity: 1, y: 0, rotate: rotate }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0, 
        zIndex: 10,
        boxShadow: "12px 12px 0px 0px rgba(0,0,0,1)" 
      }}
      className={`flex flex-col ${borderRadius} border-4 border-black shadow-neo bg-white overflow-hidden h-full relative group transform transition-all duration-300`}
    >
      {/* Image Section */}
      <div className="w-full h-64 bg-slate-100 relative overflow-hidden border-b-4 border-black">
        <Image 
          src={service.imageUrl} 
          alt={service.title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-2" 
        />
        <div className={`absolute inset-0 ${accentColor} opacity-20 mix-blend-multiply transition-opacity duration-300 group-hover:opacity-40`} />
        
        {/* Sticker Overlay */}
        <div className="absolute top-4 right-4 bg-white border-2 border-black px-3 py-1 rounded-full transform rotate-12 shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            <span className="font-black text-xs">CHECK IT!</span>
        </div>
      </div>
      
      {/* Content Section */}
      <div className="p-8 flex-grow flex flex-col relative">
        {/* Background Decoration */}
        <div className={`absolute top-0 right-0 w-32 h-32 ${accentColor} rounded-bl-full opacity-20 -z-10 transition-transform duration-300 group-hover:scale-150`} />
        
        <h3 className="text-2xl font-black mb-4 text-black tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-pop-blue group-hover:to-pop-purple transition-all duration-300">
          {service.title}
        </h3>
        <p className="text-slate-700 mb-6 leading-relaxed flex-grow font-bold text-sm">
          {service.description}
        </p>

        <div className="mb-8">
          <ul className="text-sm text-slate-700 space-y-3 font-bold">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start group/item">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${accentColor} border-2 border-black mr-3 flex-shrink-0 group-hover/item:scale-125 transition-transform`}>
                  <Star size={12} fill="black" strokeWidth={0} />
                </span>
                <span className="pt-0.5 group-hover/item:underline decoration-2 decoration-pop-blue underline-offset-2 transition-all">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          asChild
          className={`w-full mt-auto ${accentColor} text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 font-black text-lg py-6 shadow-pop hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] rounded-xl`}
        >
          <a href={`/products#service-detail-${index}`}>
            VIEW MORE
            <span className="ml-2 text-xl">→</span>
          </a>
        </Button>
      </div>
    </motion.div>
  )
}
