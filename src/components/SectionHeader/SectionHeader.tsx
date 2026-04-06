import { FC } from 'react';

interface IProps {
  title: string;
  description?: string;
}

const SectionHeader: FC<IProps> = ({ title, description }) => (
  <header>
    <h1>{title}</h1>
    {description && <p>{description}</p>}
  </header>
);

export default SectionHeader;
