import Header from "@components/Header/Header";
import ThemeProvider from "@components/ThemeProvider/ThemeProvider";
import { Analytics } from '@vercel/analytics/next';
import type { Metadata } from 'next';
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "sonikbro.dev",
  description: "Personal website and blog",
  metadataBase: new URL("https://sonikbro.dev"),
  openGraph: {
    locale: "en_US",
    type: "website",
    url: "https://sonikbro.dev",
    siteName: "sonikbro.dev",
    description: "Personal website and blog",
  },
  alternates: {
    canonical: "https://sonikbro.dev",
  },
  icons: {
    apple: "/favicon/apple-touch-icon.png",
    icon: [
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  other: {
    "preconnect": "https://sonikbro.dev",
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
