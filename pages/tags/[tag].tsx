import { NextPage } from 'next';
import NextHead from 'next/head';
import { TListPosts } from '../../types';
import { siteData } from '../../data';
import { getAllSortedPosts, getPostTags } from '../api';
import PostsList from '../../components/PostsList';

interface ITagsListPage {
  posts: TListPosts[];
  tag: string;
}

const TagsListPage: NextPage<ITagsListPage> = ({ posts, tag }) => {
  return (
    <>
      <NextHead>
        <title>
          About #{tag} · {siteData.name}
        </title>
      </NextHead>

      <h1>About #{tag}</h1>

      {posts.map((list) => (
        <PostsList key={list.year} year={list.year} posts={list.posts} />
      ))}
    </>
  );
};

export default TagsListPage;

export async function getStaticPaths() {
  const postTags = getPostTags();

  const paths = postTags.map((tag) => ({
    params: { tag: tag.toString() },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { tag: string } }) {
  const tag = params.tag;
  const posts: TListPosts[] = getAllSortedPosts(tag);

  return {
    props: {
      posts,
      tag,
    },
  };
}
