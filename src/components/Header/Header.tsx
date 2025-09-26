"use client"

import { usePathname } from 'next/navigation';
import { FC, memo } from 'react';
import Link from "next/link";

const paths = [
  {
    link: '/',
    label: 'sonikbro.dev',
  },
  {
    link: '/posts',
    label: 'Posts',
  },
  {
    link: '/uses',
    label: 'Uses',
  },
  {
    link: '/contacts',
    label: 'Contacts',
  },
];

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header>
      <nav>
        <ul>
          {paths.map(path => {
            const isActive = path.link === '/'
              ? pathname === path.link
              : pathname.startsWith(path.link);

            return (
              <li key={path.link}>
                <Link href={path.link} aria-current={isActive}>
                  {path.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <hr/>
    </header>
  );
};

export default memo(Header);
