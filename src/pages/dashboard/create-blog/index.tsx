import React from 'react';
import { TUser } from '../../../types/user';

type CreateBlogProps = {
  user: TUser;
  setCreatePost: Function;
};
const CreateBlog = ({ user, setCreatePost }: CreateBlogProps) => {
  return <div>CreateBlog</div>;
};

export default CreateBlog;
