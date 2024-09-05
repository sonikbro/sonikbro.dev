import type { NextPage } from 'next';
import Post from '../components/Post';
import { TPostMeta, PATH } from '../types';
import { getContentByFile } from './api';
import TitleHead from '../components/TitleHead/TitleHead';

interface Props {
  data: TPostMeta;
  content: string;
}

const Uses: NextPage<Props> = ({ data, content }) => {
  return (
    <>
      <TitleHead title="uses" />
      <Post frontmatter={data} markdown={content} type="page" />
    </>
  );
};

export async function getStaticProps() {
  const { data, content } = getContentByFile(PATH.USES, 'index.md');

  return {
    props: { data, content },
  };
}

export default Uses;
