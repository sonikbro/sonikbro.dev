import { FC, memo } from 'react';
import { ContentMetadata } from '@type/content'
import ContentMeta from '@components/ContentMeta/ContentMeta';
import MarkdownView from '@components/MarkdownView/MarkdownView';

interface IProps {
  metadata: ContentMetadata;
  content: string;
}

const ContentEntity: FC<IProps> = ({ metadata, content }) => {
  const isPostType = metadata.type === 'post';

  return (
    <section>
      <ContentMeta
        metadata={metadata}
        isShowContentParams={isPostType}
      />

      {isPostType && <hr/>}

      <article>
        <MarkdownView content={content}/>
      </article>
    </section>
  );
};

export default memo(ContentEntity);
