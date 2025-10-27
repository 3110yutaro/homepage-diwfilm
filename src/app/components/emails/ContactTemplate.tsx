import * as React from 'react';

interface ContactTemplateProps {
  name: string;
  email: string;
  company?: string;
  subject: string;
  message: string;
}

const ContactTemplate = ({
  name,
  email,
  company,
  subject,
  message
}: ContactTemplateProps): React.ReactElement => (
  <div>
    <h1>ウェブサイトからのお問い合わせ</h1>
    <p>以下の内容でお問い合わせがありました。</p>
    <hr />
    <h2>お問い合わせ情報</h2>
    <ul>
      <li>
        <strong>お名前:</strong> {name}
      </li>
      <li>
        <strong>メールアドレス:</strong> {email}
      </li>
      {company && (
        <li>
          <strong>会社名:</strong> {company}
        </li>
      )}
      <li>
        <strong>お問い合わせ種別:</strong> {subject}
      </li>
    </ul>
    <h3>メッセージ内容</h3>
    <p style={{ whiteSpace: 'pre-wrap' }}>{message}</p>
    <hr />
  </div>
)

export default ContactTemplate
