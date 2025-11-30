import * as React from 'react';

interface AutoReplyTemplateProps {
  name: string;
  message: string;
}

const AutoReplyTemplate = ({
  name,
  message
}: AutoReplyTemplateProps): React.ReactElement => (
  <div>
    <h1>お問い合わせありがとうございます</h1>
    <p>{name} 様</p>
    <p>この度は、DIWFilmへお問い合わせいただき、誠にありがとうございます。</p>
    <p>以下の内容でお問い合わせを受け付けいたしました。</p>
    <p>担当者が内容を確認次第、2-3日以内にご連絡させていただきますので、今しばらくお待ちください。</p>
    <hr />
    <h2>お問い合わせ内容</h2>
    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    <hr />
    <p>※このメールは自動送信されています。</p>
    <p>
      DIWFilm<br />
      Website: <a href="https://diwfilm.com">https://diwfilm.com</a>
    </p>
  </div>
)

export default AutoReplyTemplate
