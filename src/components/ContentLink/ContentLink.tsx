import { FC, memo } from 'react';
import Link from "next/link";
import { ContentMetadata } from '@type/content'
import ContentMeta from '@components/ContentMeta/ContentMeta';
import styles from './ContentLink.module.scss'

interface IProps {
  metadata: ContentMetadata;
  baseUrl: string;
}

const ContentLink: FC<IProps> = ({ metadata, baseUrl }) => {
  return (
    <Link href={`${baseUrl}/${metadata.slug}`} className={styles.ContentLink}>
      <ContentMeta
        metadata={metadata}
        isShowContentParams={true}
        titleTag={'h3'}
      />
    </Link>
  );
};

export default memo(ContentLink);
