import { NextPage } from 'next';
import { TPostMeta } from '../../types';
import Post from '../../components/Post';
import TitleHead from '../../components/TitleHead/TitleHead';
import { getPostBySlug, getPostSlugs } from '../api';

interface IPostProps {
  data: TPostMeta;
  content: string;
}

const SinglePost: NextPage<IPostProps> = ({ data, content }) => {
  return (
    <>
      <TitleHead title={data.title} />

      <Post frontmatter={data} markdown={content} type="post" />
    </>
  );
};

export default SinglePost;

export async function getStaticPaths() {
  const filesInPosts = getPostSlugs();

  const paths = filesInPosts.map((filename) => ({
    params: { slug: filename.slice(0, filename.indexOf('.')) },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data, content } = getPostBySlug(params.slug);

  return {
    props: { data, content },
  };
}
