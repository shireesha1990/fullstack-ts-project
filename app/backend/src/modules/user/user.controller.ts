import { Request, Response } from 'express';
import { UserService } from './user.service';

const UserController = {
  createUser: (req: Request, res: Response) => {
    const user = UserService.createUser(req.body);
    res.status(201).json(user);
  },
  getUsers: (_req: Request, res: Response) => {
    const users = UserService.getAllUsers();
    res.json(users);
  },
};

export default UserController;
