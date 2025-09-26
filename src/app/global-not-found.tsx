import "../styles/globals.scss";

import type { Metadata } from "next";
import Link from 'next/link';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
}

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body>
        <section>
          <h1>4 <span>😢</span> 4</h1>
          <h2>Oops! Page Not Be Found</h2>
          <p>
            Sorry, the page you are looking for does not exist, the title has
            changed, or it is temporary unavailable.
          </p>
          <p>
            <Link href={`/`}>Back to homepage</Link>
          </p>
        </section>
      </body>
    </html>
  )
};
