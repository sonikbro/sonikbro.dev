import type { Metadata } from "next";
import { getContactsContent } from "@api/contacts";
import ContentEntity from '@components/ContentEntity/ContentEntity'

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = getContactsContent();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function Contacts() {
  const contacts = getContactsContent();

  return (
    <ContentEntity
      metadata={contacts.metadata}
      content={contacts.content}
    />
  );
}


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


// <Button
//   onClick={handleClick}
//   ariaLabel={'Copy email'}
// >
//   {text}
// </Button>
