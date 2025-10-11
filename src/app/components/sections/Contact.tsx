"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 実際のフォーム送信処理を実装
    console.log("Form submitted:", formData)
    alert("お問い合わせありがとうございます。担当者よりご連絡いたします。")
    setFormData({
      name: "",
      email: "",
      company: "",
      subject: "",
      message: ""
    })
  }

  const contactInfo = [
    {
      title: "メールアドレス",
      content: "info@yohji-international.com",
      icon: "✉️"
    },
    {
      title: "電話番号",
      content: "03-1234-5678",
      icon: "📞"
    },
    {
      title: "住所",
      content: "東京都渋谷区神南1-2-3",
      icon: "📍"
    },
    {
      title: "営業時間",
      content: "平日 9:00 - 18:00",
      icon: "🕐"
    }
  ]

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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* お問い合わせフォーム */}
            <Card className="p-8">
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                お問い合わせフォーム
              </h3>

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
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-purple hover:opacity-90 text-white font-semibold py-3"
                >
                  お問い合わせを送信する
                </Button>
              </form>
            </Card>

            {/* 連絡先情報 */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-primary">
                  連絡先情報
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="text-2xl">{info.icon}</div>
                      <div>
                        <h4 className="font-semibold text-primary">{info.title}</h4>
                        <p className="text-muted-foreground">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>

              {/* 地図プレースホルダー */}
              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  アクセス
                </h3>
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center text-muted-foreground">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p>地図がここに表示されます</p>
                    <p className="text-sm mt-2">
                      住所: 東京都渋谷区神南1-2-3<br />
                      最寄り駅: 渋谷駅から徒歩5分
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
