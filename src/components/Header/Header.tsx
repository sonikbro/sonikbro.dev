"use client"

import { usePathname } from 'next/navigation';
import { FC, memo } from 'react';
import Link from "next/link";
import ThemeToggle from '@components/ThemeToggle/ThemeToggle';
import styles from './Header.module.scss'

const MAIN_PATH = '/';

const paths = [
  {
    link: MAIN_PATH,
    label: 'home',
  },
  {
    link: '/posts',
    label: 'posts',
  },
  {
    link: '/contacts',
    label: 'contacts',
  },
];

const Header: FC = () => {
  const pathname = usePathname();

  return (
    <header className={styles.Header}>
      <nav>
        <ul className={'deskonly'}>
          <li>
            <strong>
              <Link href={MAIN_PATH} className={styles.Header__linkMain}>
                {'/'}sonikbro.dev
              </Link>
            </strong>
          </li>
        </ul>
        <ul className={styles.Header__linksNav}>
          {paths.map(path => {
            const isActive = path.link === '/'
              ? pathname === path.link
              : pathname.startsWith(path.link);

            return (
              <li key={path.link}>
                <Link href={path.link} className={styles.Header__outlineLink} aria-current={isActive}>
                  {path.label}
                </Link>
              </li>
            )
          })}
        </ul>
        <ul>
          <li>
            <ThemeToggle/>
          </li>
        </ul>
      </nav>
      <hr/>
    </header>
  );
};

export default memo(Header);
