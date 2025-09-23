import type { Metadata } from "next";
import ReactMarkdown from 'react-markdown';
import { getContactsContent } from "@api/contacts";

export async function generateMetadata(): Promise<Metadata> {
  const { metadata } = getContactsContent();

  return {
    title: metadata.title,
    description: metadata.description,
  };
}

export default function Contacts() {
  const { metadata, content } = getContactsContent();

  return (
    <div>
      <article>
        <header>
          <h1>
            {metadata.title}
          </h1>

          {metadata.description && (
            <p>
              {metadata.description}
            </p>
          )}

          {metadata.date && (
            <time>
              Last updated: {new Date(metadata.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
          )}
        </header>

        <div>
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
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
