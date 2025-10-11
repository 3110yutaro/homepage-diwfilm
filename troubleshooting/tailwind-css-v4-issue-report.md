# Tailwind CSS v4 & Turbopack 互換性問題 トラブルシューティングレポート

**日付**: 2025/10/10

## 1. 発生した問題

Next.jsプロジェクトの起動時に、以下のエラーメッセージが表示され、アプリケーションが正常に動作しない問題が発生しました。

```
Error: Cannot apply unknown utility class `from-purple-600`
```

このエラーは、Tailwind CSSが `from-purple-600` という基本的なグラデーション用のクラスを認識できていないことを示していました。

## 2. 原因の分析と特定

当初は、`tailwind.config.js` や `postcss.config.mjs` といった設定ファイルの内容に誤りがあると考え、いくつかの修正を試みましたが、問題は解決しませんでした。

調査を進めた結果、根本的な原因は単一の設定ミスではなく、比較的新しい技術同士の組み合わせによる**互換性の問題**であると特定しました。

**根本原因**:
*   **Tailwind CSS v4**: 大幅なアップデートが行われた最新バージョン。
*   **Next.js Turbopack**: Next.jsが開発した高速なビルドエンジン。

この2つの技術が、まだお互いに完全に対応しきれておらず、CSSのビルドプロセスでエラーを引き起こしていました。

## 3. 解決までの手順

問題を解決するために、「**安定していて実績のあるバージョンの組み合わせに戻す**」という方針で、以下の手順を実施しました。

### ステップ1: Turbopackの無効化

まず、問題の切り分けのために、`package.json` ファイル内の開発スクリプトを修正し、Turbopackを無効化しました。これにより、Next.jsはより安定した標準のビルドエンジン（Webpack）を使用するようになります。

**変更前 (`package.json`)**:
```json
"dev": "next dev --turbopack",
```

**変更後 (`package.json`)**:
```json
"dev": "next dev",
```

### ステップ2: Tailwind CSS v4のアンインストール

次に、互換性の問題を引き起こしているTailwind CSS v4関連のパッケージをプロジェクトから削除しました。

**実行コマンド**:
```bash
npm uninstall tailwindcss @tailwindcss/postcss
```

### ステップ3: 安定版のTailwind CSS v3を再インストール

v4の代わりに、広く使われており安定している**バージョン3系統のTailwind CSS**と、それに対応するツール（`postcss`, `autoprefixer`）をインストールしました。

**実行コマンド**:
```bash
npm install -D tailwindcss@^3 postcss autoprefixer
```
*(補足: `-D` は開発時にのみ必要なパッケージとしてインストールするオプションです)*

### ステップ4: PostCSS設定ファイルの更新

最後に、`postcss.config.mjs` ファイルを、Tailwind CSS v3で動作する標準的な設定に更新しました。

**更新後の内容 (`postcss.config.mjs`)**:
```javascript
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

export default config
```

## 4. 結論

上記の手順を実行した後、開発サーバーを再起動したところ、エラーは完全に解消され、アプリケーションは正常に起動するようになりました。

今回のトラブルシューティングから、「新しい技術を導入する際は、関連ツールとの互換性を十分に確認することが重要である」という教訓が得られました。問題が発生した場合は、一度安定したバージョンの組み合わせに戻すことが有効な解決策となります。
