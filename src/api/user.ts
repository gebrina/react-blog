import axios from 'axios';
import { TUser } from '../types/user';
import { CONSTANT } from '../constants';

export const createUser = async (user: TUser): Promise<TUser> => {
  const response = await axios.post<TUser>(`${CONSTANT.API_URL}/users`, user);
  return response.data;
};

export const fetchUsers = async (): Promise<TUser[]> => {
  const response = await axios.get<TUser[]>(`${CONSTANT.API_URL}/users`);
  return response.data;
};

export const fetchUserById = async (
  id: string,
  token: string
): Promise<TUser> => {
  const response = await axios.get<TUser>(`${CONSTANT.API_URL}/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};
