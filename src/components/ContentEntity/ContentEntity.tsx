import { FC, memo } from 'react';
import { ContentMetadata } from '@type/content'
import ContentMeta from '@components/ContentMeta/ContentMeta';
import MarkdownView from '@components/MarkdownView/MarkdownView';
import Comments from '@components/Comments/Comments';

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

      {isPostType && (
        <>
          <hr/>
          <Comments slug={metadata.slug} />
        </>
      )}
    </section>
  );
};

export default memo(ContentEntity);
