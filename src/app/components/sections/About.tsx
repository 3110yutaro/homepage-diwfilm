"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export function About() {
  const strengths = [
    {
      title: "ワンストップソリューション",
      description: "SNS戦略立案から映像制作、編集、機材レンタルまで、コンテンツ制作の全工程をワンストップでサポート。一貫性のある高品質なクリエイティブを提供します。",
      color: "bg-vivid-yellow",
      rotate: -1,
    },
    {
      title: "データに基づく戦略提案",
      description: "市場調査やデータ分析に基づき、お客様のビジネス目標達成に直結する戦略を策定。感覚だけに頼らない、成果の出るアプローチを重視します。",
      color: "bg-vivid-pink",
      rotate: 1,
    },
    {
      title: "プロフェッショナルな制作体制",
      description: "経験豊富な専門スタッフと最新の撮影・編集機材を駆使し、企画から納品までハイクオリティな映像制作を実現します。",
      color: "bg-vivid-blue",
      rotate: -1,
    },
    {
      title: "柔軟なカスタマイズ対応",
      description: "お客様一人ひとりの課題やご予算に合わせて、サービス内容を柔軟にカスタマイズ。最適なソリューションをオーダーメイドでご提案します。",
      color: "bg-vivid-purple",
      rotate: 1,
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
    <section id="about" className="relative py-20 md:py-32 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-vivid-yellow rounded-full mix-blend-multiply filter blur-3xl opacity-20 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-vivid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-20 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-vivid-blue to-vivid-purple mb-6 tracking-tighter drop-shadow-sm">
            About Us
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto font-medium">
            私たちは、デジタル時代のコンテンツパートナーとして、<br className="hidden md:block" />
            お客様の「伝えたい」想いをカタチにし、ビジネスの成長を加速させるお手伝いをします。
          </p>
        </motion.div>

        {/* 代表挨拶 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mb-20 p-8 md:p-12 bg-white border-4 border-black shadow-pop rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-vivid-yellow rounded-bl-full opacity-20" />
          
          <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 relative z-10">
            <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-black overflow-hidden flex-shrink-0 mx-auto md:mx-0 shadow-pop-hover bg-vivid-blue">
              <Image
                src="/assets/kajiwara_hideo_icon.png"
                alt="代表取締役 梶原英生"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-grow text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-black mb-6 text-slate-900">代表挨拶</h3>
              <div className="text-slate-600 leading-relaxed whitespace-pre-line space-y-4 font-medium">
                <p>私たちのホームページに訪れていただき、誠にありがとうございます。<br />代表の梶原英生です。</p>
                <p>現代は、誰もが発信者となり、想いを世界中に届けられる素晴らしい時代です。しかし、溢れる情報の中で本当に価値あるメッセージを届け、人の心を動かすことは容易ではありません。</p>
                <p>私たちデューフィルム株式会社は、そんなデジタル時代におけるお客様の最高のパートナーとなるべく創業いたしました。私たちの使命は、お客様一人ひとりが胸に秘めた「伝えたい」という純粋な想いを、プロフェッショナルな技術とクリエイティビティによって、最も伝わる「カタチ」にすることです。</p>
                <p>SNSの戦略立案から、心に響く映像制作、細部までこだわり抜いた動画編集まで。私たちはデータに基づく緻密な戦略と、長年培ってきた表現力で、お客様のビジネスがまだ見ぬステージへと飛躍するお手伝いをいたします。</p>
                <p>お客様の物語に深く寄り添い、共に悩み、共に喜びを分かち合える。そんな血の通ったパートナーシップを、私たちは何よりも大切にしています。</p>
                <p className="font-bold text-vivid-blue mt-4">このウェブサイトが、皆様との素晴らしい出会いのきっかけとなることを心より願っております。</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 会社概要 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 50 }}
          className="mb-20 p-8 md:p-12 bg-white border-4 border-black shadow-pop rounded-3xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-32 h-32 bg-vivid-pink rounded-br-full opacity-20" />
          
          <h3 className="text-2xl md:text-3xl font-black mb-8 text-center text-slate-900 relative z-10">会社概要</h3>
          <div className="space-y-6 relative z-10 font-medium">
            {[
              { label: "会社名", value: "デューフィルム株式会社" },
              { label: "創業", value: "2022年1月" },
              { label: "代表者名", value: "梶原英生" },
              { label: "資本金", value: "500万円" },
              { label: "所在地", value: "〒107-0062 東京都港区南青山2丁目2番15号 Win Aoyama ビル UCF635" },
              { label: "メールアドレス", value: "info@diwfilm.com" },
              { label: "事業内容", value: "SNSコンサルティング事業\n映像制作・動画編集事業\n撮影機材レンタル事業" },
            ].map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row border-b-2 border-slate-100 pb-4 last:border-0">
                <h4 className="font-bold w-full md:w-1/4 mb-2 md:mb-0 text-slate-800">{item.label}</h4>
                <p className="text-slate-600 w-full md:w-3/4 whitespace-pre-line">{item.value}</p>
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
          <h3 className="text-3xl md:text-5xl font-black text-center mb-16 text-slate-900 tracking-tight">
            Our Strengths
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {strengths.map((strength, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, rotate: strength.rotate }}
                className={`p-8 rounded-3xl border-4 border-black shadow-pop bg-white relative overflow-hidden group`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${strength.color} rounded-bl-full opacity-20 group-hover:opacity-40 transition-opacity`} />
                <h4 className="font-black mb-4 text-xl md:text-2xl text-slate-900 relative z-10">{strength.title}</h4>
                <p className="text-slate-600 leading-relaxed font-medium relative z-10">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
