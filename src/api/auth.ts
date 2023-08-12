import axios from 'axios';
import { CONSTANT } from '../constants';
import { TUser } from '../types/user';

export const authUser = async (loginInfo: Partial<TUser>): Promise<any> => {
  const response = await axios.post(
    `${CONSTANT.API_URL}/auth/login`,
    loginInfo
  );
  return response.data;
};
