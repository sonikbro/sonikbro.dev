import { FC, memo, ReactNode, Children, isValidElement } from 'react';
import ReactMarkdown, { Components } from 'react-markdown';
import rehypeSlug from 'rehype-slug';
import Image from 'next/image';
import Link from 'next/link';

interface IProps {
  content: string;
  components?: Partial<Components>;
}

const prefixRegex = /^(?:(\d+\.\s*)?((\p{Emoji_Presentation}|\p{Emoji}\uFE0F)\s*)?)/u;

function createLinkedHeading(Tag: 'h3' | 'h4' | 'h5' | 'h6') {
  return function LinkedHeading({ id, children }: { id?: string; children?: ReactNode }) {
    const childArray = Children.toArray(children);
    const firstChild = childArray[0];

    const hasNestedLink = childArray.some(
      (child) => isValidElement(child) && (child.type === 'a' || child.type === Link),
    );

    if (hasNestedLink) {
      return <Tag id={id}>{children}</Tag>;
    }

    let prefix: string | null = null;
    let rest: ReactNode[] = childArray;

    if (typeof firstChild === 'string') {
      const match = firstChild.match(prefixRegex);
      if (match && match[0]) {
        prefix = match[0];
        rest = [firstChild.slice(match[0].length), ...childArray.slice(1)];
      }
    } else if (
      isValidElement<{ children?: ReactNode }>(firstChild) &&
      typeof firstChild.props.children === 'string'
    ) {
      const match = firstChild.props.children.match(prefixRegex);
      if (match && match[0]) {
        prefix = match[0];
        rest = [firstChild.props.children.slice(match[0].length), ...childArray.slice(1)];
      }
    }

    return (
      <Tag id={id}>
        {prefix}{id ? <a href={`#${id}`}>{rest}</a> : rest}
      </Tag>
    );
  };
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
  h3: createLinkedHeading('h3'),
  h4: createLinkedHeading('h4'),
  h5: createLinkedHeading('h5'),
  h6: createLinkedHeading('h6'),
};

const MarkdownView: FC<IProps> = ({ content, components }) => {
  const mergedComponents = { ...defaultComponents, ...components };

  return (
    <ReactMarkdown
      rehypePlugins={[rehypeSlug]}
      components={mergedComponents}
    >
      {content}
    </ReactMarkdown>
  );
};

export default memo(MarkdownView);
