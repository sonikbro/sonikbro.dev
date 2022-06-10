import React from 'react';
import Link from 'next/link';
import { IPostsItemMeta } from '../../types';
import PostMetaWraper from '../Styled/PostMetaWraper';
import DateTime from '../Styled/DateTime';
import TagsList from '../Styled/TagsList';

interface IPostsList {
  posts: IPostsItemMeta[];
  year: string;
}

const PostsList: React.FC<IPostsList> = ({ year, posts }) => {
  return (
    <>
      <h3>{year}</h3>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a className="inline-block">{post.title}</a>
            </Link>
            <PostMetaWraper>
              <DateTime date={post.date} />
              <TagsList size="small" items={post.tags} />
            </PostMetaWraper>
          </li>
        ))}
      </ul>
    </>
  );
};

export default PostsList;
