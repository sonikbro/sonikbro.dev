import { FC } from 'react';

interface IProps {
  title: string;
  description?: string;
}

const EmptyState: FC<IProps> = ({ title, description }) => (
  <div>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </div>
);

export default EmptyState;
