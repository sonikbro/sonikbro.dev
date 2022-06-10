import React from 'react';
import Link from 'next/link';

// const TagsWrapper = styled.ul`
//   max-width: unset;
//   display: inline-block;
//   padding-left: 0;
// `;

// const Tag = styled.li<{ size?: 'small' | 'big' }>`
//   display: inline-block;
//   margin-right: ${({ size }) => (size && size === 'small' ? '0.3em' : '0.5em')};
//   font-size: ${({ size }) => (size && size === 'small' ? '.75em' : 'inherit')};
//   cursor: pointer;

//   a {
//     padding: ${({ size }) =>
//       size && size === 'small' ? '0 0.3em' : '0 0.5em'};
//     background: ${({ theme }) => theme.primaryColor};
//     border-radius: 1em;
//     border: 2px solid ${({ theme }) => theme.primaryColor};
//     color: ${({ theme }) => theme.bgColor};
//     text-decoration: none;

//     :hover {
//       background: ${({ theme }) => theme.darkPrimaryColor};
//     }

//     :focus {
//       background: ${({ theme }) => theme.darkPrimaryColor};
//       outline: unset;
//       border: 2px solid ${({ theme }) => theme.primaryColor};
//     }
//   }
// `;

interface ITagsList {
  items: string[] | undefined | null;
  size?: 'small' | 'big';
}

const TagsList: React.FC<ITagsList> = ({ items, size }) => {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <ul>
      {items.map((tag: string) => (
        <li key={tag}>
          <Link href={`/tags/${tag}`}>
            <a># {tag}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TagsList;
