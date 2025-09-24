"use client"

import { usePathname } from 'next/navigation';
import { FC, memo } from 'react';
import Link from "next/link";
import "./Header.css";

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
    <header className='header'>
      <nav>
        <ul>
          {paths.map(path => {
            const isActive = path.link === '/'
              ? pathname === path.link
              : pathname.startsWith(path.link);

            return (
              <li key={path.link} className={isActive ? 'active' : ''}>
                <Link href={path.link}>
                  {path.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  );
};

export default memo(Header);
