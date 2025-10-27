"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
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

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              お問い合わせ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              サービスに関するご質問やご相談など、お気軽にお問い合わせください。
              専門スタッフが丁寧に対応させていただきます。
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {/* お問い合わせフォーム */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary text-center">
                お問い合わせフォーム
              </h3>

              {isSuccess ? (
                <div className="text-center p-4 bg-green-100 text-green-700 rounded-md">
                  <p className="font-semibold">お問い合わせありがとうございます！</p>
                  <p>メッセージは正常に送信されました。担当者よりご連絡いたします。</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        お名前 <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="山田 太郎"
                        disabled={isSubmitting}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        メールアドレス <span className="text-destructive">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="example@company.com"
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium mb-2">
                      会社名
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="株式会社サンプル"
                      disabled={isSubmitting}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      お問い合わせ種別 <span className="text-destructive">*</span>
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
                      disabled={isSubmitting}
                    >
                      <option value="">選択してください</option>
                      <option value="サービスについて">サービスについて</option>
                      <option value="料金について">料金について</option>
                      <option value="導入相談">導入相談</option>
                      <option value="その他">その他</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      お問い合わせ内容 <span className="text-destructive">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                      placeholder="お問い合わせ内容を詳しくお書きください。"
                      disabled={isSubmitting}
                    />
                  </div>

                  {error && (
                    <div className="text-center p-2 bg-red-100 text-destructive rounded-md">
                      <p>{error}</p>
                    </div>
                  )}

                  <SubmitButton isSubmitting={isSubmitting} />
                </form>
              )}
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
