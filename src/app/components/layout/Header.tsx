"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50)
  })

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  const menuItems = [
    { name: "About", href: "/about", color: "hover:text-pop-blue" },
    { name: "Service", href: "/products", color: "hover:text-pop-pink" },
  ]

  return (
    <>
      <div className="fixed top-2 sm:top-4 inset-x-0 z-50 flex justify-center pointer-events-none w-screen px-2 sm:px-6 lg:px-8">
        <motion.header
          className={`pointer-events-auto w-full max-w-7xl rounded-full border-2 sm:border-4 border-black transition-all duration-300 ${
            isScrolled 
              ? "bg-white shadow-neo" 
              : "bg-white/80 backdrop-blur-md shadow-sm"
          }`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, damping: 20 }}
        >
          <div className="px-3 sm:px-6 md:px-8">
            <div className="flex h-12 sm:h-14 items-center justify-between">
              {/* ロゴ */}
              <Link href="/" className="flex items-center group relative">
                <span className="text-lg sm:text-2xl font-black tracking-tighter text-black group-hover:scale-105 transition-transform relative z-10">
                  DIW FILM
                </span>
                <span className="absolute -bottom-1 left-0 w-full h-1 sm:h-2 bg-pop-yellow -z-0 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </Link>

              {/* デスクトップナビゲーション */}
              <div className="hidden md:flex items-center space-x-8">
                <nav className="flex items-center space-x-8">
                  {menuItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative text-sm font-bold text-black transition-colors duration-200 group ${item.color}`}
                    >
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-1 bg-black transition-all duration-300 group-hover:w-full"></span>
                    </Link>
                  ))}
                </nav>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button asChild className="bg-pop-pink text-white hover:bg-pop-pink/90 rounded-full px-6 font-bold border-2 border-black shadow-pop hover:shadow-pop-hover transition-all duration-200">
                    <Link href="/contact">Contact</Link>
                  </Button>
                </motion.div>
              </div>

              {/* モバイルメニューボタン */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden text-black hover:bg-transparent"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? (
                    <X className="h-8 w-8" />
                  ) : (
                    <Menu className="h-8 w-8" />
                  )}
                </motion.div>
              </Button>
            </div>
          </div>
        </motion.header>
      </div>

      {/* モバイルメニューオーバーレイ */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-pop-yellow flex flex-col items-center justify-center md:hidden"
          >
            {/* 背景装飾 */}
            <div className="absolute inset-0 w-screen h-screen overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-32 h-32 bg-pop-blue rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-10 right-10 w-32 h-32 bg-pop-pink rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-10 left-20 w-32 h-32 bg-pop-green rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            </div>

            <nav className="flex flex-col space-y-8 text-center relative z-10">
              {menuItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-5xl font-black text-black hover:text-white hover:text-stroke-black transition-colors duration-300 tracking-tighter"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="inline-block text-3xl font-bold text-white bg-black px-8 py-4 rounded-full border-4 border-white shadow-neo hover:shadow-neo-hover hover:scale-105 transition-all duration-300"
                >
                  Contact Us!
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
