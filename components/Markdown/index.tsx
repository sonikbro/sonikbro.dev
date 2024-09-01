import { FC, PropsWithChildren } from 'react';
import ReactMarkdown from 'react-markdown';

import LinkRenderer from './LinkRenderer/LinkRenderer';
import ParagraphRenderer from './ParagraphRenderer/ParagraphRenderer';

const MARKDOWN_COMPONENTS: object = {
  a: LinkRenderer,
  p: ParagraphRenderer,
};


const Markdown: FC<PropsWithChildren> = ({ children }) => {
  return (
    <article className="md:max-w-[75ch]">
      <ReactMarkdown components={MARKDOWN_COMPONENTS}>
        {children as string}
      </ReactMarkdown>
    </article>
  );
};

export default Markdown;
