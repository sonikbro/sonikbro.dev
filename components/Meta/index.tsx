import Head from 'next/head';
import { siteData } from '../../data';

function HeadMeta() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      <title>{siteData.name}</title>
      <link rel="preconnect" href={siteData.domain} crossOrigin=""></link>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:url" content={siteData.domain}></meta>
      <meta property="og:site_name" content={siteData.name}></meta>
      <meta property="og:description" content={siteData.description}></meta>
      {/* <meta property="og:image" content="HOME_OG_IMAGE_URL" /> */}
      <meta name="description" content={siteData.description} />
      <link rel="canonical" href={siteData.domain}></link>
      <meta name="theme-color" content="var(--bgColor)" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      ></link>
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      ></link>
      <link rel="manifest" href="/favicon/site.webmanifest"></link>
    </Head>
  );
}

export default HeadMeta;
