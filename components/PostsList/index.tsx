import React from 'react';
import Link from 'next/link';
// import styled from 'styled-components';
// import { IPostsItemMeta } from '../../types';
// import PostMetaWraper from '../Styled/PostMetaWraper';
// import DateTime from '../Styled/DateTime';
// import TagsList from '../Styled/TagsList';

// const List = styled.ul``;

// const PostItem = styled.li`
//   a {
//     display: inline-block;
//   }
// `;

interface IPostsList {
  //   posts: IPostsItemMeta[];
  posts: any[];
  year: string;
}

const PostsList: React.FC<IPostsList> = ({ year, posts }) => {
  return (
    <>
      <h3>{year}</h3>
      {/* <List>
        {posts.map((post) => (
          <PostItem key={post.slug}>
            <Link href={`/posts/${post.slug}`}>
              <a>{post.title}</a>
            </Link>
            <PostMetaWraper>
              <DateTime date={post.date} />
              <TagsList size="small" items={post.tags} />
            </PostMetaWraper>
          </PostItem>
        ))}
      </List> */}
    </>
  );
};

export default PostsList;
