import { FC } from 'react';
import Link from "next/link";
import { ContentMetadata } from '@type/content'
import ContentMeta from '@components/ContentMeta/ContentMeta';
import styles from './ContentLink.module.scss'

interface IProps {
  metadata: ContentMetadata;
  baseUrl: string;
  showStats?: boolean;
}

const ContentLink: FC<IProps> = ({ metadata, baseUrl, showStats = false }) => {
  return (
    <Link href={`${baseUrl}/${metadata.slug}`} className={styles.ContentLink}>
      <article>
        <ContentMeta
          metadata={metadata}
          isShowContentParams={true}
          titleTag={'h3'}
          compact
          showStats={showStats}
        />
      </article>
    </Link>
  );
};

export default ContentLink;
