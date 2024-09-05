import NextHead from 'next/head';
import { siteData } from '../../data';

type ITitleHead = {
  title: string;
}

const TitleHead: React.FC<ITitleHead> = ({ title }) => {
  return (
    <NextHead>
        <title>{title} · {siteData.name}</title>
    </NextHead>
  );
};

export default TitleHead;
