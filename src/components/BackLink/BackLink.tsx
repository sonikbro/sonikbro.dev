import { FC } from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
  label: string;
}

const BackLink: FC<IProps> = ({ href, label }) => (
  <Link href={href}>&larr; Back to {label}</Link>
);

export default BackLink;
