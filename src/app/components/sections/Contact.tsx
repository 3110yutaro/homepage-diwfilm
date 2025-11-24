"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { SubmitButton } from "@/app/components/ui/SubmitButton"

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

  const inputClasses = "w-full px-4 py-3 border-2 border-slate-200 rounded-xl bg-slate-50 focus:outline-none focus:border-black focus:ring-0 transition-colors duration-200 font-medium text-slate-900 placeholder:text-slate-400"
  const labelClasses = "block text-sm font-bold mb-2 text-slate-900"

  return (
    <section id="contact" className="relative py-20 md:py-32 overflow-hidden">
      {/* 背景装飾 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-vivid-blue rounded-full mix-blend-multiply filter blur-3xl opacity-10 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* セクションタイトル */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black font-montserrat text-transparent bg-clip-text bg-gradient-to-r from-vivid-blue to-vivid-purple mb-6 tracking-tighter drop-shadow-sm">
              Contact
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              サービスに関するご質問やご相談など、お気軽にお問い合わせください。<br className="hidden md:block" />
              専門スタッフが丁寧に対応させていただきます。
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 50 }}
            className="max-w-3xl mx-auto"
          >
            {/* お問い合わせフォーム */}
            <div className="p-8 md:p-12 bg-white border-4 border-black shadow-pop rounded-3xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-vivid-yellow rounded-bl-full opacity-20 pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-vivid-pink rounded-tr-full opacity-20 pointer-events-none" />

              <h3 className="text-2xl md:text-3xl font-black mb-8 text-center text-slate-900 relative z-10">
                お問い合わせフォーム
              </h3>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center p-8 bg-green-50 border-2 border-green-200 text-green-800 rounded-2xl"
                >
                  <p className="font-bold text-xl mb-2">お問い合わせありがとうございます！</p>
                  <p>メッセージは正常に送信されました。担当者よりご連絡いたします。</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className={labelClasses}>
                        お名前 <span className="text-vivid-pink">*</span>
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

                    <div>
                      <label htmlFor="email" className={labelClasses}>
                        メールアドレス <span className="text-vivid-pink">*</span>
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

                  <div>
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

                  <div>
                    <label htmlFor="subject" className={labelClasses}>
                      お問い合わせ種別 <span className="text-vivid-pink">*</span>
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
                      <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" fillRule="evenodd"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className={labelClasses}>
                      お問い合わせ内容 <span className="text-vivid-pink">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className={`${inputClasses} resize-none`}
                      placeholder="お問い合わせ内容を詳しくお書きください。"
                      disabled={isSubmitting}
                    />
                  </div>

                  {error && (
                    <div className="text-center p-4 bg-red-50 border-2 border-red-200 text-red-600 rounded-xl font-bold">
                      <p>{error}</p>
                    </div>
                  )}

                  <div className="pt-4">
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
