import { FC } from 'react';

interface IProps {
  data: Record<string, unknown>;
}

const JsonLd: FC<IProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
  />
);

export default JsonLd;
