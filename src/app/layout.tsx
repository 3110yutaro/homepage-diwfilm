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
  description: "デューフィルム株式会社の公式サイト。映像制作・動画編集に加え、英語学習アプリと映像制作・編集支援ツールを開発しています。",
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
    <html lang="ja">
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
