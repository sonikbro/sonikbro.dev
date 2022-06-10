export const enum PATH {
  POST = 'content/posts',
  USES = 'content/uses',
}

// export type TTheme = {
//   color: string;
//   primaryColor: string;
//   lightPrimaryColor: string;
//   darkPrimaryColor: string;
//   bgColor: string;
//   muteColor: string;

//   sizes: TThemeSizes;
// };

// export type TThemeSizes = {
//   tablet: string;
// };

export type TListItem = {
  link: string;
  label: string;
};

export type TPostMeta = {
  title: string;
  date: string;
  timeToRead?: number;
  description?: string;
  tags?: string[] | null;
};

export interface IPostsItemMeta extends TPostMeta {
  slug: string;
}

export type TSiteData = {
  name: string;
  domain: string;
  author: string;
  description: string;
  currentYear: number;
  email: string;
};

export type TListPosts = {
  year: string;
  posts: IPostsItemMeta[];
};
