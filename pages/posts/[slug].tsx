import { NextPage } from 'next';
import NextHead from 'next/head';
import { TPostMeta } from '../../types';
import Post from '../../components/Post';
import { siteData } from '../../data';
import { getPostBySlug, getPostSlugs } from '../api';

interface IPostProps {
  data: TPostMeta;
  content: string;
}

const SinglePost: NextPage<IPostProps> = ({ data, content }) => {
  return (
    <>
      <NextHead>
        <title>
          {data.title} · {siteData.name}
        </title>
      </NextHead>

      <Post frontmatter={data} markdown={content} type="post" />
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const filesInPosts = await getPostSlugs();

  const paths = filesInPosts.map((filename) => ({
    params: { slug: filename.slice(0, filename.indexOf('.')) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data, content } = await getPostBySlug(params.slug);

  return {
    props: { data, content },
  };
}
