import { FC } from 'react';

interface IProps {
  data: Record<string, unknown>;
}

const JsonLd: FC<IProps> = ({ data }) => (
  <script
    type="application/ld+json"
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
);

export default JsonLd;
