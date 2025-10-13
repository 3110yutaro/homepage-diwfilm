export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 会社情報 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gradient">
              Yohji International
            </h3>
            <p className="text-sm text-muted-foreground">
              国際的な視野を持ち、日本品質のサービスを提供する企業です。
            </p>
          </div>

          {/* クイックリンク */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">クイックリンク</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "プロダクト", href: "#products" },
                { name: "動画", href: "#videos" },
                { name: "About Me", href: "#about" },
                { name: "問い合わせ", href: "#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* お問い合わせ情報 */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">お問い合わせ</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>メール: info@yohji-international.com</p>
              <p>電話: 03-1234-5678</p>
              <p>住所: 東京都渋谷区...</p>
            </div>
          </div>

          {/* ソーシャルメディア */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">フォローする</h4>
            <div className="flex space-x-4">
              {[
                { name: "Twitter", href: "#" },
                { name: "Instagram", href: "https://www.instagram.com/yohji_japan/" },
                { name: "YouTube", href: "https://www.youtube.com/@yohji_kokusaikouryu" },
                { name: "TikTok", href: "https://www.tiktok.com/@yoji_japan" },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Yohji International. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
