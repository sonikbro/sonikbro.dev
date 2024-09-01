import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Analytics } from '@vercel/analytics/react';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
          <Analytics />
        </body>
      </Html>
    );
  }
}
