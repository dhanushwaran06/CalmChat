import { User } from '../types';

let USER_ID_COUNTER = 1;
export const USERS: User[] = [];
export const JWT_SECRET = 'secret';

export const getNextUserId = (): number => {
  return USER_ID_COUNTER++;
};
