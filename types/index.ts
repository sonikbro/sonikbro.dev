export const enum PATH {
  POST = 'content/posts',
  USES = 'content/uses',
}

export type TListItem = {
  link: string;
  label: string;
};

export type TPostMeta = {
  title: string;
  date: string;
  timeToRead?: number;
  description?: string;
  tags?: string[];
};

export interface IPostsItemMeta extends TPostMeta {
  slug: string;
}

export type TSiteData = {
  name: string;
  domain: string;
  description: string;
  currentYear: number;
  email: string;
};

export type TListPosts = {
  year: string;
  posts: IPostsItemMeta[];
};
