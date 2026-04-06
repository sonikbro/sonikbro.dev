import Header from "@components/Header/Header";
import ThemeProvider from "@components/ThemeProvider/ThemeProvider";
import JsonLd from "@components/JsonLd/JsonLd";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import { siteDomain, siteUrl } from '@utils/site';
import "../styles/globals.scss";
const description = 'Aloha! 👋 I’m Anatolii, the software developer.'
const keywords = ['Anatolii', 'Software Developer', 'Web Developer', 'Frontend', 'Backend', 'React', 'Next.js', 'JavaScript', 'TypeScript', 'Portfolio'];

export const metadata: Metadata = {
  title: {
    default: siteDomain,
    template: `%s · ${siteDomain}`,
  },
  description: description,
  keywords: keywords,
  authors: [{ name: 'Anatolii', url: siteUrl }],
  creator: 'Anatolii',
  publisher: 'Anatolii',
  applicationName: siteDomain,
  referrer: 'origin-when-cross-origin',
  metadataBase: new URL(siteUrl),
  category: 'technology',
  classification: 'Personal Portfolio Website',
  abstract: 'Personal portfolio website of Anatolii - Software Developer specializing in modern web technologies',
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    url: siteUrl,
    title: siteDomain,
    siteName: siteDomain,
    description: description,
    images: [
      {
        url: "/img/avatar-full.jpg",
        width: 1200,
        height: 630,
        alt: "Anatolii - Software Developer",
      }
    ],
    countryName: 'Ukraine',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteDomain,
    description: description,
    images: ["/img/avatar-full.jpg"],
    creator: '@sonikbro',
    site: '@sonikbro',
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    apple: "/favicon/apple-touch-icon.png",
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  formatDetection: {
    telephone: false,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteDomain,
  url: siteUrl,
  author: {
    '@type': 'Person',
    name: 'Anatolii',
    url: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
        <body>
          <JsonLd data={jsonLd} />
          <ThemeProvider>
            <Header/>
            <main>
              {children}
            </main>
            <footer></footer>
          </ThemeProvider>
          <Analytics />
        </body>
    </html>
  );
}
