import { FC } from 'react';
import Link from 'next/link';
import { IPostsItemMeta } from '../../types';
import PostMetaWraper from '../Styled/PostMetaWraper';
import DateTime from '../Styled/DateTime';
import TagsList from '../Styled/TagsList';

interface IPostsList {
  posts: IPostsItemMeta[];
  year: string;
}

const PostsList: FC<IPostsList> = ({ year, posts }) => {
  return (
    <>
      <h3>{year}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <h3 className="cursor-pointer">
              <Link href={`/posts/${post.slug}`}>
                {post.title}
              </Link>
            </h3>
            <PostMetaWraper>
              <DateTime date={post.date} />
              <TagsList items={post.tags} />
            </PostMetaWraper>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
