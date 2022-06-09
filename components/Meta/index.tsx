import Head from 'next/head';
// import { siteData } from '../../data';

function HeadMeta() {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>
      {/* <title>{siteData.name}</title>
      <link rel="preconnect" href={siteData.domain} crossOrigin=""></link>
      <meta property="og:locale" content="en_US"></meta>
      <meta property="og:type" content="article"></meta>
      <meta property="og:url" content={siteData.domain}></meta>
      <meta property="og:site_name" content={siteData.name}></meta>
      <meta property="og:description" content={siteData.description}></meta>
      <link rel="canonical" href={siteData.domain}></link> */}
    </Head>
  );
}

export default HeadMeta;

// import Head from 'next/head';

// const Meta = () => {
//   return (
//     <Head>
//       <link
//         rel="apple-touch-icon"
//         sizes="180x180"
//         href="/favicon/apple-touch-icon.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="32x32"
//         href="/favicon/favicon-32x32.png"
//       />
//       <link
//         rel="icon"
//         type="image/png"
//         sizes="16x16"
//         href="/favicon/favicon-16x16.png"
//       />
//       <link rel="manifest" href="/favicon/site.webmanifest" />
//       <link
//         rel="mask-icon"
//         href="/favicon/safari-pinned-tab.svg"
//         color="#000000"
//       />
//       <link rel="shortcut icon" href="/favicon/favicon.ico" />
//       <meta name="msapplication-TileColor" content="#000000" />
//       <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
//       <meta name="theme-color" content="#000" />
//       {/* <link rel="alternate" type="application/rss+xml" href="/feed.xml" /> */}
//       <meta
//         name="description"
//         content={`A statically generated blog example using Next.js.`}
//       />
//       <meta property="og:image" content="HOME_OG_IMAGE_URL" />
//     </Head>
//   );
// };

// export default Meta;
