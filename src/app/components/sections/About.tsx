"use client";

import Image from "next/image";
import { motion, Variants, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Zap, BarChart3, Video, Puzzle, Star } from "lucide-react";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 5]);

  const strengths = [
    {
      title: "ワンストップ\nソリューション",
      description: "SNS戦略立案から映像制作、編集、機材レンタルまで、コンテンツ制作の全工程をワンストップでサポート。一貫性のある高品質なクリエイティブを提供します。",
      color: "bg-pop-yellow",
      rotate: -2,
      icon: <Zap size={48} strokeWidth={1.5} />
    },
    {
      title: "データに基づく\n戦略提案",
      description: "市場調査やデータ分析に基づき、お客様のビジネス目標達成に直結する戦略を策定。感覚だけに頼らない、成果の出るアプローチを重視します。",
      color: "bg-pop-pink",
      rotate: 2,
      icon: <BarChart3 size={48} strokeWidth={1.5} />
    },
    {
      title: "プロフェッショナルな\n制作体制",
      description: "経験豊富な専門スタッフと最新の撮影・編集機材を駆使し、企画から納品までハイクオリティな映像制作を実現します。",
      color: "bg-pop-blue",
      rotate: -1,
      icon: <Video size={48} strokeWidth={1.5} />
    },
    {
      title: "柔軟な\nカスタマイズ対応",
      description: "お客様一人ひとりの課題やご予算に合わせて、サービス内容を柔軟にカスタマイズ。最適なソリューションをオーダーメイドでご提案します。",
      color: "bg-pop-green",
      rotate: 3,
      icon: <Puzzle size={48} strokeWidth={1.5} />
    }
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <section ref={containerRef} id="about" className="relative py-32 overflow-hidden bg-white">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />
      
      {/* Parallax Background Text */}
      <motion.div 
        style={{ y, rotate }}
        className="absolute top-1/4 -left-20 text-[20vw] font-black text-slate-100 pointer-events-none select-none leading-none z-0 hidden lg:block"
      >
        ABOUT
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-7xl font-black font-montserrat text-black mb-6 tracking-tighter relative z-10">
              About Us
            </h2>
            <div className="absolute -bottom-2 left-0 w-full h-3 md:h-4 bg-pop-yellow -rotate-2 z-0"></div>
          </div>
          <p className="text-base md:text-2xl text-slate-700 max-w-3xl mx-auto font-bold mt-8 leading-relaxed">
            私たちは、デジタル時代のコンテンツパートナーとして、<br className="hidden md:block" />
            お客様の「伝えたい」想いをカタチにし、<br className="hidden md:block" />
            ビジネスの成長を加速させるお手伝いをします。
          </p>
        </motion.div>

        {/* 代表挨拶 */}
        <motion.div
          initial={{ opacity: 0, x: -50, rotate: -2 }}
          whileInView={{ opacity: 1, x: 0, rotate: -2 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mb-16 md:mb-24 p-6 md:p-12 bg-white border-4 border-black shadow-neo-lg rounded-[2rem] relative overflow-hidden max-w-5xl mx-auto"
        >
          <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-pop-yellow rounded-bl-full opacity-100 border-l-4 border-b-4 border-black" />
          
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-16 relative z-10">
            <div className="relative mx-auto md:mx-0 flex-shrink-0">
                <div className="w-40 h-40 md:w-64 md:h-64 rounded-full border-4 border-black overflow-hidden shadow-pop bg-pop-blue relative z-10">
                <Image
                    src="/assets/kajiwara_hideo_icon.png"
                    alt="代表取締役 梶原英生"
                    width={256}
                    height={256}
                    className="w-full h-full object-cover"
                />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white border-4 border-black px-4 py-1 rounded-full transform rotate-6 z-20 shadow-sm">
                    <span className="font-black text-sm">CEO</span>
                </div>
            </div>
            
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-4xl font-black mb-6 md:mb-8 text-black inline-block border-b-4 border-pop-blue pb-2">代表挨拶</h3>
              <div className="text-slate-700 leading-relaxed whitespace-pre-line space-y-6 font-medium text-base md:text-lg">
                <p>私たちのホームページに訪れていただき、誠にありがとうございます。<br />代表の梶原英生です。</p>
                <p>現代は、誰もが発信者となり、想いを世界中に届けられる素晴らしい時代です。しかし、溢れる情報の中で本当に価値あるメッセージを届け、人の心を動かすことは容易ではありません。</p>
                <p>私たちデューフィルム株式会社は、そんなデジタル時代におけるお客様の最高のパートナーとなるべく創業いたしました。私たちの使命は、お客様一人ひとりが胸に秘めた「伝えたい」という純粋な想いを、プロフェッショナルな技術とクリエイティビティによって、最も伝わる「カタチ」にすることです。</p>
                <p>SNSの戦略立案から、心に響く映像制作、細部までこだわり抜いた動画編集まで。私たちはデータに基づく緻密な戦略と、長年培ってきた表現力で、お客様のビジネスがまだ見ぬステージへと飛躍するお手伝いをいたします。</p>
                <p>お客様の物語に深く寄り添い、共に悩み、共に喜びを分かち合える。そんな血の通ったパートナーシップを、私たちは何よりも大切にしています。</p>
                <p className="font-bold text-pop-blue text-xl mt-6 bg-pop-blue/10 p-4 rounded-xl border-2 border-pop-blue border-dashed transform -rotate-1">このウェブサイトが、皆様との素晴らしい出会いのきっかけとなることを心より願っております。</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 会社概要 */}
        <motion.div
          initial={{ opacity: 0, x: 50, rotate: 1 }}
          whileInView={{ opacity: 1, x: 0, rotate: 1 }}
          viewport={{ once: true }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mb-16 md:mb-32 p-6 md:p-12 bg-white border-4 border-black shadow-neo-lg rounded-[2rem] relative overflow-hidden max-w-4xl mx-auto"
        >
          <div className="absolute top-0 left-0 w-32 h-32 md:w-40 md:h-40 bg-pop-pink rounded-br-full opacity-100 border-r-4 border-b-4 border-black" />
          
          <h3 className="text-3xl md:text-4xl font-black mb-8 md:mb-10 text-center text-black relative z-10">
            <span className="bg-white px-4 py-1 border-4 border-black shadow-pop transform -rotate-2 inline-block">会社概要</span>
          </h3>
          <div className="space-y-0 relative z-10 font-bold text-base md:text-lg">
            {[
              { label: "会社名", value: "デューフィルム株式会社" },
              { label: "創業", value: "2022年1月" },
              { label: "代表者名", value: "梶原英生" },
              { label: "資本金", value: "500万円" },
              { label: "所在地", value: "〒107-0062 東京都港区南青山2丁目2番15号 Win Aoyama ビル UCF635" },
              { label: "メールアドレス", value: "info@diwfilm.com" },
              { label: "事業内容", value: "SNSコンサルティング事業\n映像制作・動画編集事業\n撮影機材レンタル事業" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row border-b-2 border-black last:border-0 group hover:bg-slate-50 transition-colors">
                <div className="w-full md:w-1/3 p-4 bg-slate-100 md:bg-transparent border-b-2 md:border-b-0 md:border-r-2 border-black group-hover:bg-pop-yellow/20 transition-colors">
                    {item.label}
                </div>
                <div className="w-full md:w-2/3 p-4 whitespace-pre-line group-hover:bg-pop-blue/10 transition-colors">
                    {item.value}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 私たちの強み */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-12 md:mb-16">
            <h3 className="text-3xl md:text-6xl font-black text-black tracking-tight inline-block relative">
              Our Strengths
              <span className="absolute -top-4 -right-6 md:-top-8 md:-right-12 text-pop-yellow animate-spin-slow">
                <Star className="h-12 w-12 md:h-16 md:w-16" fill="currentColor" />
              </span>
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, rotate: 0, y: -10 }}
                className={`p-8 rounded-[2rem] border-4 border-black shadow-neo bg-white relative overflow-hidden group h-full flex flex-col transform transition-all duration-300`}
                style={{ rotate: strength.rotate }}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${strength.color} rounded-bl-full opacity-100 border-l-4 border-b-4 border-black group-hover:scale-110 transition-transform`} />
                <div className="text-5xl mb-6 relative z-10">{strength.icon}</div>
                <h4 className="font-black mb-4 text-xl md:text-2xl text-black relative z-10 whitespace-pre-line leading-tight">{strength.title}</h4>
                <p className="text-slate-700 leading-relaxed font-bold text-sm relative z-10">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
