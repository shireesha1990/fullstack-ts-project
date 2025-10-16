import { User } from '@ts-fullstack/shared';

const API_URL = 'http://localhost:5000';

export const getUsers = async (): Promise<User[]> => {
  const res = await fetch(`${API_URL}/users`);
  if (!res.ok) throw new Error('Failed to fetch users');
  return res.json();
};

export const createUser = async (user: Partial<User>): Promise<User> => {
  const res = await fetch(`${API_URL}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  });
  if (!res.ok) throw new Error('Failed to create user');
  return res.json();
};