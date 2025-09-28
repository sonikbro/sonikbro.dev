import { FC, memo } from 'react';
import { ContentItem } from '@type/content'
import ContentLink from '@components/ContentLink/ContentLink';
import styles from './ContentList.module.scss'

interface IProps {
  items: ContentItem[];
  path: string;
  title: string;
  description?: string;
}

const ContentList: FC<IProps> = ({ items, path, title, description }) => {
  const getList = () => {
    if(!items.length) {
      return (
        <div>
          <h2>
            Unfortunately, the list of posts is still empty 😢
          </h2>
          <p>Check back soon for new content!</p>
        </div>
      )
    }

    return (
      <aside>
        <nav>
          <ul className={styles.ContentList}>
            {
              items.map((item) => (
                <li key={item.metadata.slug}>
                  <ContentLink
                    metadata={item.metadata}
                    baseUrl={path}
                  />
                </li>
              ))
            }
          </ul>
        </nav>
      </aside>
    )
  }

  return (
    <section>
      <header>
        <h1>{title}</h1>
        {description && (
          <p>{description}</p>
        )}
      </header>

      {getList()}
    </section>
  );
};

export default memo(ContentList);
