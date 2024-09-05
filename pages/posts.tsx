import type { NextPage } from 'next';
import PostsList from '../components/PostsList';
import { TListPosts } from '../types';
import { getAllSortedPosts } from './api';
import TitleHead from '../components/TitleHead/TitleHead';

interface IPostsPageProps {
  posts: TListPosts[];
}

const Posts: NextPage<IPostsPageProps> = ({ posts }) => {
  return (
    <>
      <TitleHead title="posts" />

      <h1>All posts</h1>

      {!posts.length ? (
        <h2>Unfortunately, the list of posts is still empty 😢</h2>
      ) : (
        <>
          {posts.map((list) => (
            <PostsList key={list.year} year={list.year} posts={list.posts} />
          ))}
        </>
      )}
    </>
  );
};

export default Posts;

export async function getStaticProps() {
  const posts: TListPosts[] = getAllSortedPosts();

  return {
    props: {
      posts,
    },
  };
}
