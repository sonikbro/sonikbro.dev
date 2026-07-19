import { FC, ReactNode } from 'react';

interface IProps {
  title: string;
  description?: string;
  action?: ReactNode;
}

const SectionHeader: FC<IProps> = ({ title, description, action }) => (
  <header>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', marginBottom: 'var(--dev-spacing)' }}>
      <h1 style={{ margin: 0 }}>{title}</h1>
      {action}
    </div>
    {description && <p>{description}</p>}
  </header>
);

export default SectionHeader;
