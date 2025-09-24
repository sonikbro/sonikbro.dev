import { FC, memo } from 'react';
import ReactMarkdown from 'react-markdown';
import { ContentMetadata } from '@type/content'
import ContentMeta from '@components/ContentMeta/ContentMeta';

interface IProps {
  metadata: ContentMetadata;
  content: string;
  type: 'post' | 'page';
}

const ContentEntity: FC<IProps> = ({ metadata, content, type }) => {
  return (
    <section>
      <ContentMeta
        metadata={metadata}
        isShowContentParams={type === 'post'}
      />

      <article>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </section>
  );
};

export default memo(ContentEntity);
