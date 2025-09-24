import { FC, memo } from 'react';
import { ContentItem } from '@type/content'
import ContentLink from '@components/ContentLink/ContentLink';

interface IProps {
  items: ContentItem[];
  path: string;
}

const ContentList: FC<IProps> = ({ items, path }) => {
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
      <div>
        {items.map((item) => (
          <ContentLink
            key={item.metadata.slug}
            metadata={item.metadata}
            baseUrl={path}
          />
        ))}
      </div>
    )
  }

  return (
    <section>
      <header>
        <h1>All posts</h1>
      </header>

      {getList()}
    </section>
  );
};

export default memo(ContentList);
