import { FC, memo } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  content: string;
  components?: Partial<Components>;
}

const defaultComponents: Partial<Components> = {
  p: ({ node, children }) => {
    if (
      node?.children[0] &&
      'tagName' in node?.children[0] &&
      node?.children[0]?.tagName === 'img'
    ) {
      const image = node.children[0];
      const metastring = image.properties.alt as string;
      const alt = metastring?.replace(/ *\{[^)]*\} */g, '');
      const metaWidth = metastring.match(/{([^}]+)x/);
      const metaHeight = metastring.match(/x([^}]+)}/);
      const width = metaWidth ? Number(metaWidth[1]) : 768;
      const height = metaHeight ? Number(metaHeight[1]) : 432;
      const hasCaption = metastring?.toLowerCase().includes('{caption:');
      const caption = metastring?.match(/{caption: (.*?)}/)?.pop();

      return (
        <figure>
          <Image
            src={String(image.properties.src)}
            width={width}
            height={height}
            alt={alt}
          />
          {hasCaption ? (
            <figcaption>
              {caption}
            </figcaption>
          ) : null}
        </figure>
      );
    }

    return <p>{children}</p>;
  },
  a: ({ href, children }) => {
    if (href?.startsWith('/')) {
      return (
        <Link href={href}>
          {children}
        </Link>
      );
    }
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  },
  // TODO: add support for client components
  code: (opt) => {
    return <code>{opt.children}</code>;
  },
};

const MarkdownView: FC<IProps> = ({ content, components }) => {
  const mergedComponents = { ...defaultComponents, ...components };

  return (
    <ReactMarkdown components={mergedComponents}>{content}</ReactMarkdown>
  );
};

export default memo(MarkdownView);
