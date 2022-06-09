// import styled from 'styled-components';
// import { TListItem } from '../../../types';

interface IStyledButton {
  // items: TListItem[];
  items: any[];
}

const LinksList: React.FC<IStyledButton> = ({ items }) => {
  if (items.length === 0) {
    return null;
  }

  return (
    <ul>
      {/* {items.map((item: TListItem) => (
        <li key={item.label}>
          <a href={item.link} target="_blank" rel="noreferrer">
            {item.label}
          </a>
        </li>
      ))} */}
    </ul>
  );
};

export default LinksList;
