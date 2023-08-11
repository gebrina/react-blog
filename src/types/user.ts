import { TBlog } from './blog';

export type TUser = {
  username: string;
  password: string;
  email: string;
  blogs?: TBlog[];
};
