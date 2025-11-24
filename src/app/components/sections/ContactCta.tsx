"use client";

import { Button } from "@/components/ui/button"
import Link from 'next/link'
import { motion } from "framer-motion"
import { Rocket, Sparkles, Handshake } from "lucide-react"

export function ContactCta() {
  return (
    <section className="relative py-32 overflow-hidden bg-pop-yellow">
      {/* 背景パターン */}
      <div className="absolute inset-0 bg-dot-pattern opacity-20 pointer-events-none" />
      
      {/* Floating Icons */}
      <motion.div 
        className="absolute top-10 left-10 pointer-events-none opacity-50 text-pop-blue"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Rocket size={64} strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        className="absolute bottom-10 right-10 pointer-events-none opacity-50 text-pop-yellow"
        animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Sparkles size={96} strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        className="absolute top-1/2 right-20 pointer-events-none opacity-50 text-pop-pink"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
      >
        <Handshake size={80} strokeWidth={1.5} />
      </motion.div>

      {/* コンテンツ */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div 
          className="max-w-4xl mx-auto bg-white border-4 border-black shadow-neo-xl rounded-[3rem] p-12 md:p-20 relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50 }}
        >
          {/* Decorative Corners */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-pop-pink rounded-br-full opacity-100 border-r-4 border-b-4 border-black" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-pop-blue rounded-tl-full opacity-100 border-l-4 border-t-4 border-black" />

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter mb-8 text-black relative z-10">
            未来を映す、<br className="md:hidden" />お手伝いを。
          </h2>
          <p className="text-lg sm:text-xl text-slate-700 mb-12 leading-relaxed font-bold relative z-10">
            お客様のビジョンをカタチにするための最適なプランをご提案します。<br />
            SNS運用、映像制作、どんなことでも、<br className="md:hidden" />まずはお気軽にご相談ください。
          </p>
          
          <div className="relative z-10">
            <Button asChild size="lg" className="bg-black text-white hover:bg-slate-800 text-xl px-12 py-8 rounded-full font-black shadow-pop hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] transition-all transform hover:scale-105">
                <Link href="/contact">
                お問い合わせフォームへ
                <span className="ml-2">→</span>
                </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
