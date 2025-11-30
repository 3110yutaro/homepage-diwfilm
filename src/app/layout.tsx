import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { Header } from "@/app/components/layout/Header"
import { Footer } from "@/app/components/layout/Footer"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DIW FILM inc | デューフィルム株式会社",
  description: "DIW FILM inc は、映像制作とデジタルコンテンツを手掛ける会社「デューフィルム株式会社」の公式ホームページです。",
  icons: {
    icon: "/assets/tab_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <div className="min-h-screen bg-background">{children}</div>
        <Footer />
      </body>
    </html>
  )
}
