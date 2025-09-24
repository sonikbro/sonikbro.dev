import { FC, memo } from 'react';
import Link from "next/link";
import { ContentMetadata } from '@type/content'
import ContentMeta from '@components/ContentMeta/ContentMeta';

interface IProps {
  metadata: ContentMetadata;
  baseUrl: string;
}

const ContentLink: FC<IProps> = ({ metadata, baseUrl }) => {
  return (
    <article>
      <Link href={`${baseUrl}/${metadata.slug}`}>
        <ContentMeta
          metadata={metadata}
          isShowContentParams={true}
          titleTag={'h2'}
        />
      </Link>
    </article>
  );
};

export default memo(ContentLink);
