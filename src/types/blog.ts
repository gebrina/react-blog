import { TUser } from './user';

export type TBlog = {
  id: string;
  title: string;
  content: string;
  media: string;
  description: string;
  user?: TUser;
};
