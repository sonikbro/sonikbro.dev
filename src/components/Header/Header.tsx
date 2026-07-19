"use client"

import { usePathname } from 'next/navigation';
import { FC, useRef, useEffect } from 'react';
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
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;

    const update = () => {
      document.documentElement.style.setProperty('--header-height', `${el.offsetHeight}px`);
    };

    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);

    // Re-scroll to hash after hydration so scroll-margin-top is respected
    const hash = window.location.hash;
    if (hash) {
      requestAnimationFrame(() => {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' });
      });
    }

    return () => observer.disconnect();
  }, []);

  return (
    <header className={styles.Header} ref={headerRef}>
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

export default Header;
