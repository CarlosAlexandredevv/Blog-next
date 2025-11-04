import { Author } from './author';

export interface Post {
  slug: string;
  title: string;
  description: string;
  image: string;
  date: string;
  author: Author;
}
