import { User } from './user.model';

const users: User[] = [];

export const UserService = {
  createUser: (user: User) => {
    users.push(user);
    return user;
  },
  getAllUsers: () => users,
};
