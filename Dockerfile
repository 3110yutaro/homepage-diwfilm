# 依存関係のインストールステージ
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# ビルドステージ
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ARG RESEND_API_KEY
ENV RESEND_API_KEY=${RESEND_API_KEY}
RUN npm run build

# 実行ステージ
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
# Next.jsがリッスンするホスト名を0.0.0.0に設定
ENV HOSTNAME 0.0.0.0

# standaloneモードで生成されたファイルのみをコピー
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# 非rootユーザーで実行
USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
