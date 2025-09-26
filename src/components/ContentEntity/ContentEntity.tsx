import { FC, memo } from 'react';
import { ContentMetadata } from '@type/content'
import ContentMeta from '@components/ContentMeta/ContentMeta';
import MarkdownView from '@components/MarkdownView/MarkdownView';

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
        <MarkdownView content={content}/>
      </article>
    </section>
  );
};

export default memo(ContentEntity);
