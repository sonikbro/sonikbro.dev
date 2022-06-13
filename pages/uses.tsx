import type { NextPage } from 'next';
import NextHead from 'next/head';
import Post from '../components/Post';
import { TPostMeta, PATH } from '../types';
import { siteData } from '../data';
import { getContentByFile } from './api';

interface Props {
  data: TPostMeta;
  content: string;
}

const Uses: NextPage<Props> = ({ data, content }) => {
  return (
    <>
      <NextHead>
        <title>{siteData.name} · uses</title>
      </NextHead>
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
