import axios from 'axios';
import { TBlog } from '../types/blog';
import { CONSTANT } from '../constants';
import { getLgoggedInUserInfo } from '../utils';

export const fetchBlogs = async (page: number = 1): Promise<TBlog[]> => {
  const response = await axios.get<TBlog[]>(
    `${CONSTANT.API_URL}/blogs?limit=${CONSTANT.LIMIT}&page=${page}`
  );
  return response.data;
};

export const fetchBlogById = async (id: string): Promise<TBlog> => {
  const response = await axios.get<TBlog>(`${CONSTANT.API_URL}/blogs/${id}`);
  return response.data;
};

export const postBlog = async (blog: FormData): Promise<TBlog> => {
  const { access_token } = getLgoggedInUserInfo();
  const response = await axios.post<TBlog>(`${CONSTANT.API_URL}/blogs`, blog, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.data;
};

export const deleteBlog = async (id?: string) => {
  const { access_token } = getLgoggedInUserInfo();
  const response = await axios.delete(`${CONSTANT.API_URL}/blogs/${id}`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
  return response.data;
};

export const updateBlog = async (id: string, blog: TBlog): Promise<TBlog> => {
  const { access_token } = getLgoggedInUserInfo();
  const response = await axios.put<TBlog>(
    `${CONSTANT.API_URL}/blogs/${id}`,
    blog,
    {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    }
  );
  return response.data;
};
