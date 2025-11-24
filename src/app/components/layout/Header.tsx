"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  const menuItems = [
    { name: "About", href: "/about" },
    { name: "Service", href: "/products" },
  ]

  return (
    <div className="fixed top-6 inset-x-0 z-50 flex justify-center">
      <motion.header
        className={`w-[95%] max-w-5xl rounded-full border-4 border-black transition-all duration-300 ${
          isScrolled ? "bg-vivid-yellow shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]" : "bg-white/90 backdrop-blur-md shadow-sm"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
      >
      <div className="px-6 md:px-8">
        <div className="flex h-12 items-center justify-between">
          {/* ロゴ */}
          <Link href="/" className="flex items-center group">
            <span className="text-2xl font-black tracking-tighter text-black group-hover:scale-105 transition-transform">DIW FILM</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-bold text-black hover:text-slate-600 transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
            <Button asChild className="bg-black text-white hover:bg-slate-800 rounded-full px-6 font-bold shadow-md hover:shadow-lg transition-all duration-200">
              <Link href="/contact">Contact</Link>
            </Button>
          </div>

          {/* モバイルメニューボタン */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-black"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>
      </div>
      
      {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full mt-2 bg-white border-4 border-black rounded-3xl p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-center text-lg font-bold text-black hover:text-vivid-blue transition-colors duration-200 py-2"
                >
                  {item.name}
                </Link>
              ))}
              <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-center text-lg font-bold text-white bg-black rounded-full py-2 hover:bg-slate-800 transition-colors duration-200"
                >
                  Contact
              </Link>
            </nav>
          </div>
        )}
      </motion.header>
    </div>
  )
}
