import fs from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
// import { readTime } from '../../utils';
// import { PATH, IPostsItemMeta, TListPosts } from '../../types';

// const postsDirectory = join(process.cwd(), PATH.POST);

// export function getPostBySlug(name: string) {
//   const fileContent = matter(
//     fs.readFileSync(join(postsDirectory, `${name}.md`), 'utf8')
//   );

//   const content = fileContent.content;
//   const data = {
//     ...fileContent.data,
//     timeToRead: readTime(fileContent.content),
//   };

//   return { data, content };
// }

// export function getPostSlugs(): string[] {
//   return fs.readdirSync(postsDirectory);
// }

// export function getPostTags(): string[] {
//   const slugs = getPostSlugs();
//   const tags = slugs.map((slug) => getPostMeta(slug)).map((meta) => meta.tags);
//   const tagsList = tags && Array.from(new Set(tags.flat()));

//   return tagsList;
// }

// export function getPostMeta(filename: string): any {
//   const file = fs.readFileSync(join(postsDirectory, `${filename}`), 'utf8');
//   const { data } = matter(file);

//   return {
//     ...data,
//     slug: filename.slice(0, filename.indexOf('.')),
//   };
// }

// export function getAllSortedPosts(tag: string = 'all'): TListPosts[] {
//   const slugs = getPostSlugs();
//   const isSortByTag: boolean = tag === 'all';

//   const posts: IPostsItemMeta[] = slugs
//     .map((slug) => getPostMeta(slug))
//     .filter((post: IPostsItemMeta) =>
//       isSortByTag ? post : post.tags?.includes(tag)
//     )
//     .sort((post1: IPostsItemMeta, post2: IPostsItemMeta) =>
//       post1.date > post2.date ? -1 : 1
//     );

//   const years: string[] = Array.from(
//     new Set(posts.map((post) => post.date.split('-')[0]))
//   );

//   const postsByYear: TListPosts[] = years.map((year) => ({
//     year,
//     posts: posts.filter((post) => post.date.includes(year)),
//   }));

//   return postsByYear;
// }

// export function getContentByFile(path: string, name: string) {
//   const fileContent = matter(
//     fs.readFileSync(join(join(process.cwd(), path), `${name}`), 'utf8')
//   );

//   const content = fileContent.content;
//   const timeToRead = readTime(content);
//   const data = { ...fileContent.data, timeToRead };

//   return { data, content };
// }
