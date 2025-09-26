import Header from "@components/Header/Header";
import "../styles/globals.scss";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
