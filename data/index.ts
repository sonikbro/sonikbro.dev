import { TListItem, TSiteData } from '../types';

export const siteData: TSiteData = {
  name: 'sonikbro.dev',
  domain: 'https://sonikbro.dev/',
  author: 'Anatolii Melnyk',
  description: 'Hi! I’m Anatolii Melnyk, a software developer from Ukraine',
  currentYear: new Date().getFullYear(),
  email: 'toliamel@gmail.com',
};

export const listEmail: TListItem[] = [
  {
    link: `mailto:${siteData.email}`,
    label: siteData.email,
  },
];

export const listSocial: TListItem[] = [
  {
    link: 'https://www.linkedin.com/in/anatolii-melnyk-7a0440104/',
    label: 'Linkedin',
  },
  {
    link: 'https://github.com/sonikbro',
    label: 'Github',
  },
  {
    link: 'https://t.me/sonikbro',
    label: 'Telegram',
  },
  {
    link: 'https://www.facebook.com/soniikbro/',
    label: 'Facebook',
  },
  {
    link: 'https://www.instagram.com/sonikbro/',
    label: 'Instagram',
  },
  {
    link: 'https://twitter.com/sonikbro',
    label: 'Twitter',
  },
];

export const YEAR_START_DEVELOPMENT = 2019;
