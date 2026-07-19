import { FC } from 'react';
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
    <article>
      <header>
        <ContentMeta
          metadata={metadata}
          isShowContentParams={isPostType}
        />
      </header>

      {isPostType && <hr/>}

      <section>
        <MarkdownView content={content}/>
      </section>

      {isPostType && (
        <>
          <hr/>
          <Comments slug={metadata.slug} />
        </>
      )}
    </article>
  );
};

export default ContentEntity;
