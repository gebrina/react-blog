import axios from 'axios';
import { TBlog } from '../types/blog';
import { CONSTANT } from '../constants';

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
  const token = JSON.parse(localStorage.getItem('user') || '').access_token;
  const response = await axios.post<TBlog>(`${CONSTANT.API_URL}/blogs`, blog, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const deleteBlog = async (id: number) => {
  const response = await axios.delete(`${CONSTANT.API_URL}/blogs/${id}`);
  return response.data;
};

export const updateBlog = async (id: number, blog: TBlog): Promise<TBlog> => {
  const response = await axios.put<TBlog>(
    `${CONSTANT.API_URL}/blogs/${id}`,
    blog
  );
  return response.data;
};
