import { NextResponse } from 'next/server'
import { Resend } from 'resend'
import ContactTemplate from '@/app/components/emails/ContactTemplate'

// Resendのインスタンスを作成します。環境変数からAPIキーを読み込みます。
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    // リクエストボディからフォームデータを取得します。
    const { name, email, company, subject, message } = await request.json();

    // 必須項目が入力されているかチェックします。
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: '必須項目が不足しています。' }, { status: 400 });
    }

    // Resendを使ってメールを送信します。
    const data = await resend.emails.send({
      from: 'DIWFilm Website <noreply@diwfilm.com>', // 送信元メールアドレス
      to: ['3110yutaro@gmail.com'], // 送信先メールアドレス（テスト用）
      subject: `【DIWFilm】ウェブサイトからのお問い合わせ: ${subject}`, // メールの件名
      react: ContactTemplate({ name, email, company, subject, message }) // メール本文のテンプレート
    })

    // 成功した場合は、送信データを返します。
    return NextResponse.json(data);
  } catch (error) {
    // エラーが発生した場合は、エラーメッセージを返します。
    console.error('Email sending error:', error);
    return NextResponse.json({ error: 'メールの送信中にエラーが発生しました。' }, { status: 500 });
  }
}
