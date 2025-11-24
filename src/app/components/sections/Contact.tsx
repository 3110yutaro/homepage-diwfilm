"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SubmitButton } from "@/app/components/ui/SubmitButton"
import { Mail, Send, MessageCircle, PartyPopper } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    setIsSuccess(false)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('サーバーエラーが発生しました。しばらくしてから再度お試しください。')
      }

      await response.json()
      setIsSuccess(true)
      setFormData({
        name: "",
        email: "",
        company: "",
        subject: "",
        message: ""
      })
    } catch (error: unknown) {
      if (error instanceof Error) {
        setError(error.message || '予期せぬエラーが発生しました。')
      } else {
        setError('予期せぬエラーが発生しました。')
      }
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputClasses = "w-full px-6 py-4 border-4 border-black rounded-2xl bg-white focus:outline-none focus:border-pop-blue focus:ring-4 focus:ring-pop-blue/20 transition-all duration-300 font-bold text-lg text-black placeholder:text-slate-400 shadow-sm hover:shadow-md"
  const labelClasses = "block text-lg font-black mb-3 text-black ml-2"

  return (
    <section id="contact" className="relative py-32 overflow-hidden bg-pop-yellow/10">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      
      {/* Floating Icons */}
      <motion.div 
        className="absolute top-20 left-10 pointer-events-none text-pop-blue"
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Mail size={64} strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        className="absolute bottom-20 right-10 pointer-events-none text-pop-pink"
        animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, delay: 1 }}
      >
        <Send size={96} strokeWidth={1.5} />
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* セクションタイトル */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-7xl font-black font-montserrat text-black mb-8 tracking-tighter relative inline-block">
              Contact
              <span className="absolute -top-6 -right-12 text-pop-yellow animate-bounce delay-1000">
                <MessageCircle size={64} strokeWidth={2} />
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-700 max-w-3xl mx-auto font-bold leading-relaxed">
              サービスに関するご質問やご相談など、<br className="hidden md:block" />
              お気軽にお問い合わせください！
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50, rotate: 1 }}
            whileInView={{ opacity: 1, y: 0, rotate: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="max-w-4xl mx-auto"
          >
            {/* お問い合わせフォーム */}
            <div className="p-8 md:p-16 bg-white border-4 border-black shadow-neo-xl rounded-[3rem] relative overflow-hidden transform transition-transform hover:scale-[1.01] duration-500">
              {/* Decorative Corners */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-pop-blue rounded-bl-full opacity-100 border-l-4 border-b-4 border-black" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-pop-pink rounded-tr-full opacity-100 border-r-4 border-t-4 border-black" />

              <h3 className="text-3xl md:text-4xl font-black mb-12 text-center text-black relative z-10">
                <span className="bg-pop-yellow px-6 py-2 border-4 border-black shadow-pop transform -rotate-2 inline-block">
                  お問い合わせフォーム
                </span>
              </h3>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-12 bg-pop-green/20 border-4 border-pop-green text-green-900 rounded-3xl relative z-10"
                >
                  <div className="flex justify-center mb-6 text-pop-green">
                    <PartyPopper size={64} strokeWidth={1.5} />
                  </div>
                  <p className="font-black text-3xl mb-4">Thank You!</p>
                  <p className="font-bold text-xl">お問い合わせありがとうございます。<br/>担当者よりご連絡いたします。</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="group">
                      <label htmlFor="name" className={labelClasses}>
                        お名前 <span className="text-pop-pink">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder="山田 太郎"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="email" className={labelClasses}>
                        メールアドレス <span className="text-pop-pink">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className={inputClasses}
                        placeholder="example@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="company" className={labelClasses}>
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className={inputClasses}
                      placeholder="株式会社サンプル"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div className="group">
                    <label htmlFor="subject" className={labelClasses}>
                      お問い合わせ種別 <span className="text-pop-pink">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className={`${inputClasses} appearance-none cursor-pointer`}
                        disabled={isSubmitting}
                      >
                        <option value="">選択してください</option>
                        <option value="サービスについて">サービスについて</option>
                        <option value="料金について">料金について</option>
                        <option value="導入相談">導入相談</option>
                        <option value="その他">その他</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 flex items-center px-6 pointer-events-none text-black">
                        <svg className="w-6 h-6 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label htmlFor="message" className={labelClasses}>
                      お問い合わせ内容 <span className="text-pop-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className={`${inputClasses} resize-none`}
                      placeholder="お問い合わせ内容を詳しくお書きください。"
                      disabled={isSubmitting}
                    />
                  </div>

                  {error && (
                    <div className="text-center p-6 bg-red-50 border-4 border-red-200 text-red-600 rounded-2xl font-bold text-lg">
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="pt-8 text-center">
                    <SubmitButton isSubmitting={isSubmitting} />
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
