import { FC } from 'react';
import { TListItem } from '../../../types';

interface IStyledButton {
  items: TListItem[];
}

const LinksList: FC<IStyledButton> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.label}>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default LinksList;
