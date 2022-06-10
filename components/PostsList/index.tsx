import React from 'react';
import Link from 'next/link';
import { IPostsItemMeta } from '../../types';
import PostMetaWraper from '../Styled/PostMetaWraper';
import DateTime from '../Styled/DateTime';
import TagsList from '../Styled/TagsList';

// const List = styled.ul``;

// const PostItem = styled.li`
//   a {
//     display: inline-block;
//   }
// `;

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
              <a>{post.title}</a>
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
