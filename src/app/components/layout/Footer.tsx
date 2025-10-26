export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full border-t bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 会社情報 */}
          <div className="space-y-4 md:col-span-1">
            <h3 className="text-lg font-semibold text-gradient">
              DIW film
            </h3>
            <p className="text-sm text-muted-foreground">
              デジタル時代のコンテンツパートナーとして、お客様の「伝えたい」想いをカタチにします。
            </p>
          </div>

          {/* クイックリンク */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">クイックリンク</h4>
            <nav className="flex flex-col space-y-2">
              {[
                { name: "Services", href: "/products" },
                { name: "About Us", href: "/about" },
                { name: "Contact", href: "/contact" },
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
              <p>メール: info@diwfilm.com</p>
              <p>住所: 東京都港区南青山2-2-15</p>
            </div>
          </div>
        </div>

        {/* コピーライト */}
        <div className="mt-8 pt-8 border-t text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} DIW film. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
