import React from 'react';
import Link from 'next/link';

interface ITagsList {
  items: string[] | undefined | null;
}

const TagsList: React.FC<ITagsList> = ({ items }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="max-w-full inline-block pl-0 my-0">
      {items.map((tag: string) => (
        <li className="inline-block my-0 mr-[0.5em]" key={tag}>
          <Link href={`/tags/${tag}`}>
            <a className="button-primary no-underline rounded-2xl bgColor-text primaryColor-bg px-[0.5em]">
              # {tag}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
