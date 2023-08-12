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
