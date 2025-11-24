"use client";

import { Products } from "@/app/components/sections/Products"
import { ContactCta } from "@/app/components/sections/ContactCta"
import { CustomCursor } from "@/app/components/ui/CustomCursor"
import { motion, useScroll, useSpring } from "framer-motion"

export default function ProductsPage() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="cursor-none">
      <CustomCursor />
      
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-gradient-to-r from-pop-yellow via-pop-pink to-pop-blue origin-left z-[100]"
        style={{ scaleX }}
      />

      <Products />
      <ContactCta />
    </main>
  )
}
