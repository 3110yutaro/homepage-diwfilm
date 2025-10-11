"use client"

import { useState, useRef, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"

export function Videos() {
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set())
  const videoRefs = useRef<(HTMLDivElement | null)[]>([])

  const videos = [
    {
      title: "会社紹介動画",
      description: "Yohji Internationalの理念とサービス概要を紹介します。",
      thumbnail: "/api/placeholder/400/225",
      duration: "3:24",
      category: "会社紹介"
    },
    {
      title: "サービス説明動画",
      description: "提供するサービスの詳細と特徴をわかりやすく解説します。",
      thumbnail: "/api/placeholder/400/225",
      duration: "5:12",
      category: "サービス紹介"
    },
    {
      title: "お客様の声",
      description: "実際にサービスをご利用いただいたお客様からの声を紹介します。",
      thumbnail: "/api/placeholder/400/225",
      duration: "4:08",
      category: "お客様の声"
    },
    {
      title: "技術紹介動画",
      description: "私たちが活用する最新技術とその効果について説明します。",
      thumbnail: "/api/placeholder/400/225",
      duration: "6:33",
      category: "技術紹介"
    }
  ]

  useEffect(() => {
    const observers = videoRefs.current.map((ref, index) => {
      if (!ref || loadedVideos.has(index)) return null

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !loadedVideos.has(index)) {
              setLoadedVideos(prev => new Set([...prev, index]))
            }
          })
        },
        { threshold: 0.1 }
      )

      observer.observe(ref)
      return observer
    })

    return () => {
      observers.forEach(observer => observer?.disconnect())
    }
  }, [loadedVideos])

  const handleVideoPlay = (videoIndex: number) => {
    // 実際の動画プレイヤー実装では、ここで動画を再生
    console.log(`Playing video ${videoIndex + 1}`)
  }

  return (
    <section id="videos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* セクションタイトル */}
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gradient mb-4">
              動画コンテンツ
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              私たちのサービスや会社について、動画でわかりやすく紹介します。
              最新の情報や詳細な説明を動画でご覧ください。
            </p>
          </div>

          {/* 動画グリッド */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videos.map((video, index) => (
              <Card
                key={index}
                ref={el => videoRefs.current[index] = el}
                className="group overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                {/* サムネイルエリア */}
                <div className="relative aspect-video bg-muted">
                  {loadedVideos.has(index) ? (
                    <>
                      {/* 実際の動画プレイヤーまたはサムネイル画像 */}
                      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-gradient-purple rounded-full flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                          <p className="text-sm text-muted-foreground">動画を再生</p>
                        </div>
                      </div>

                      {/* 再生ボタンオーバーレイ */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="lg"
                          className="bg-black/70 hover:bg-black/90 text-white border-0"
                          onClick={() => handleVideoPlay(index)}
                        >
                          <Play className="w-5 h-5 mr-2" />
                          再生する
                        </Button>
                      </div>
                    </>
                  ) : (
                    /* ローディングプレースホルダー */
                    <div className="w-full h-full bg-muted animate-pulse flex items-center justify-center">
                      <div className="text-muted-foreground">動画を読み込み中...</div>
                    </div>
                  )}

                  {/* 動画情報オーバーレイ */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <div className="flex justify-between items-end text-white">
                      <div>
                        <span className="text-xs bg-primary/80 px-2 py-1 rounded">
                          {video.category}
                        </span>
                      </div>
                      <span className="text-sm font-medium">
                        {video.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* 動画情報 */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-primary">
                    {video.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {/* もっと見るCTA */}
          <div className="text-center mt-16">
            <Card className="p-8 bg-card/50 backdrop-blur">
              <h3 className="text-xl font-semibold mb-4 text-primary">
                YouTubeチャンネルもチェック
              </h3>
              <p className="text-muted-foreground mb-6">
                より多くの動画コンテンツをYouTubeチャンネルで配信しています。
                チャンネル登録して最新情報をゲットしましょう。
              </p>
              <Button size="lg" className="bg-gradient-purple hover:opacity-90 text-white">
                YouTubeチャンネルを見る
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
