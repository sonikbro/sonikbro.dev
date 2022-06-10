import React from 'react';
import Markdown from '../Markdown';
import { TPostMeta } from '../../types';
import DateTime from '../Styled/DateTime';
import PostMetaWraper from '../Styled/PostMetaWraper';
import TagsList from '../Styled/TagsList';
import Divider from '../Styled/Divider';

interface IPost {
  markdown: string;
  frontmatter: TPostMeta;
  type: 'post' | 'page';
}

const Post: React.FC<IPost> = ({ markdown, frontmatter, type }) => {
  if (type === 'page') {
    return (
      <div>
        <h2>{frontmatter.title}</h2>
        <p>
          <span>Last update: </span>
          <DateTime date={frontmatter.date} />
        </p>

        <Markdown>{markdown}</Markdown>
      </div>
    );
  }

  return (
    <>
      <div>
        <h2>{frontmatter.title}</h2>
        <p>{frontmatter.description}</p>
        <PostMetaWraper>
          <DateTime date={frontmatter.date} />
          <span>{frontmatter.timeToRead} min read</span>
        </PostMetaWraper>
      </div>

      <Markdown>{markdown}</Markdown>
      <Divider />
      <TagsList items={frontmatter.tags} />
    </>
  );
};

export default Post;
