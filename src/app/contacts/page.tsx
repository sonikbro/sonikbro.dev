// import { SyntheticEvent, useCallback, useState } from 'react';
import type { Metadata } from "next";
// import Button from '../components/Styled/Button';
// import LinksList from '../components/Styled/LinksList';
// import { listEmail, listSocial, siteData } from '../data';
// import TitleHead from '../components/TitleHead/TitleHead';

export const metadata: Metadata = {
  title: "Contacts",
  description: "Get in touch with me",
};

export default function Contact() {
  // const [text, setText] = useState<string>('Copy email');

  // const handleClick = useCallback(
  //   (event: SyntheticEvent<HTMLButtonElement, Event>): void => {
  //     event.preventDefault();

  //   //   navigator?.clipboard.writeText(siteData.email);
  //     setText('Email copied');

  //     setTimeout(
  //       () => setText('Copy email'),
  //       2000
  //     );
  //   },
  //   []
  // );

  return (
    <>
      <h1>Get in touch</h1>
      <p>With any questions or requests or just greetings, write here:</p>
      {/* <LinksList items={listEmail} /> */}
      <p>
        {/* <Button
          onClick={handleClick}
          ariaLabel={'Copy email'}
        >
          {text}
        </Button> */}
      </p>
      <h2>My social networks</h2>
      <p>
        The following is a list of social networks. Browse them to find more
        information about me.
      </p>
      {/* <LinksList items={listSocial} /> */}
    </>
  );
};
