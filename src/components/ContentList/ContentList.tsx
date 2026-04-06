import { FC, memo } from 'react';
import { ContentItem } from '@type/content'
import ContentLink from '@components/ContentLink/ContentLink';
import SectionHeader from '@components/SectionHeader/SectionHeader';
import EmptyState from '@components/EmptyState/EmptyState';
import styles from './ContentList.module.scss'

interface IProps {
  items: ContentItem[];
  path: string;
  title: string;
  description?: string;
}

const ContentList: FC<IProps> = ({ items, path, title, description }) => {
  return (
    <section>
      <SectionHeader title={title} description={description} />

      {items.length === 0 ? (
        <EmptyState
          title="Unfortunately, the list of posts is still empty 😢"
          description="Check back soon for new content!"
        />
      ) : (
        <aside>
          <nav>
            <ul className={styles.ContentList}>
              {items.map((item) => (
                <li key={item.metadata.slug}>
                  <ContentLink
                    metadata={item.metadata}
                    baseUrl={path}
                  />
                </li>
              ))}
            </ul>
          </nav>
        </aside>
      )}
    </section>
  );
};

export default memo(ContentList);
