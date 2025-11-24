"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
  const colors = ['bg-vivid-yellow', 'bg-vivid-pink', 'bg-vivid-blue', 'bg-vivid-purple'];
  const accentColor = colors[index % colors.length];
  const rotate = index % 2 === 0 ? -1 : 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 50 }}
      whileHover={{ 
        scale: 1.03, 
        rotate: rotate * 2, 
        boxShadow: "8px 8px 0px 0px rgba(0,0,0,1)" 
      }}
      className="flex flex-col rounded-3xl border-4 border-black shadow-pop bg-white overflow-hidden h-full relative group"
    >
      <div className="w-full h-64 bg-slate-100 relative overflow-hidden border-b-4 border-black">
        <Image 
          src={service.imageUrl} 
          alt={service.title} 
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className={`absolute inset-0 ${accentColor} opacity-0 group-hover:opacity-20 transition-opacity duration-300 mix-blend-multiply`} />
      </div>
      
      <div className="p-8 flex-grow flex flex-col relative">
        <div className={`absolute top-0 right-0 w-24 h-24 ${accentColor} rounded-bl-full opacity-10 -z-10`} />
        
        <h3 className="text-2xl font-black mb-4 text-slate-900 tracking-tight">
          {service.title}
        </h3>
        <p className="text-slate-600 mb-6 leading-relaxed flex-grow font-medium">
          {service.description}
        </p>

        <div className="mb-8">
          <ul className="text-sm text-slate-600 space-y-3 font-medium">
            {service.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-start">
                <span className={`inline-flex items-center justify-center w-6 h-6 rounded-full ${accentColor} border-2 border-black mr-3 flex-shrink-0`}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span className="pt-0.5">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        <Button
          asChild
          className={`w-full mt-auto ${accentColor} text-black border-2 border-black hover:bg-black hover:text-white transition-all duration-300 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px]`}
        >
          <a href={`/products#service-detail-${index}`}>詳細を見る</a>
        </Button>
      </div>
    </motion.div>
  )
}
