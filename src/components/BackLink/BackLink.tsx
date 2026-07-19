import { FC } from 'react';
import Link from 'next/link';

interface IProps {
  href: string;
  label: string;
  hard?: boolean;
}

const BackLink: FC<IProps> = ({ href, label, hard }) =>
  hard ? (
    <a href={href}>&larr; Back to {label}</a>
  ) : (
    <Link href={href}>&larr; Back to {label}</Link>
  );

export default BackLink;
