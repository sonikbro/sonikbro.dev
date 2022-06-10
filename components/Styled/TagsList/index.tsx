import React from 'react';
import Link from 'next/link';

interface ITagsList {
  items: string[] | undefined | null;
  size?: 'small' | 'big';
}

const TagsList: React.FC<ITagsList> = ({ items, size }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul className="max-w-full inline-block pl-0 my-0">
      {items.map((tag: string) => (
        <li
          className={`inline-block my-0 ${
            size && size === 'small' ? 'mr-[0.3em] text-[.75em]' : 'mr-[0.5em]'
          }`}
          key={tag}
        >
          <Link href={`/tags/${tag}`}>
            <a
              className={`no-underline tagItem bgColor-text primaryColor-bg ${
                size && size === 'small' ? 'px-[0.3em]' : 'px-[0.5em]'
              }`}
            >
              # {tag}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
