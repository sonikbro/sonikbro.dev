import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';
import Layout from '../components/layout';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider enableSystem={true}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}
