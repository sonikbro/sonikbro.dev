import "../styles/globals.scss";

import type { Metadata } from "next";
import BackLink from '@components/BackLink/BackLink';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  icons: {
    apple: "/favicon/apple-touch-icon.png",
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
}

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <header></header>
        <main>
          <section>
            <article style={{textAlign: 'center'}}>
              <header>
                <hgroup>
                  <h1>4 <span>😢</span> 4</h1>
                  <h2>Oops! Page Not Be Found</h2>
                </hgroup>
              </header>
              <small>
                Sorry, the page you are looking for does not exist, the title has
                changed, or it is temporary unavailable.
              </small>
              <footer>
                <BackLink href="/" label="homepage" />
              </footer>
            </article>
          </section>
        </main>
        <footer></footer>
      </body>
    </html>
  )
};
