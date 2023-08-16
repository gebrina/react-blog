import { TUser } from './user';

export type TBlog = {
  id?: string;
  title: string;
  content: string;
  media: any;
  description: string;
  user?: TUser;
};
