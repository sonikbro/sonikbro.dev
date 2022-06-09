import { useState } from 'react';
import type { NextPage } from 'next';
import NextHead from 'next/head';
// import Button from '../components/Styled/Button';
// import LinksList from '../components/Styled/LinksList';
// import { listEmail, listSocial, siteData } from '../data';

const Contact: NextPage = () => {
  //   const [text, setText] = useState<string>('Copy email');

  //   const handleClick = (): void => {
  //     navigator?.clipboard.writeText(siteData.email);
  //     setText('Email copied');

  //     setTimeout(() => {
  //       setText('Copy email');
  //     }, 2000);
  //   };

  return (
    <>
      <NextHead>{/* <title>{siteData.name} · contact</title> */}</NextHead>
      <h1>Get in touch</h1>
      {/* <p>With any questions or requests or just greetings, write here:</p>
      <LinksList items={listEmail} />
      <p>
        <Button onClick={handleClick}>{text}</Button>
      </p>
      <h2>My social networks</h2>
      <p>
        The following is a list of social networks. Browse them to find more
        information about me.
      </p>
      <LinksList items={listSocial} /> */}
    </>
  );
};

export default Contact;
