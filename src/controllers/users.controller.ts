import { UserRepository } from '~/repository';
import { Request, Response } from 'express';
import { User } from '~/entities';

export class UsersController {
  private userRepository: UserRepository;

  async getAllUsers(req: Request, res: Response) {
    const users = await this.userRepository.getAllUsers();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const id = req.params.id;
    const user = await this.userRepository.getUserById(req.params.id);
    res.json(user);
  }

  async createUser(req: Request, res: Response) {
    const data = req.body;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.createdAt = new Date();
    const newUser = await this.userRepository.createUser(user);
    res.json(newUser);
  }

  async updateUser(req: Request, res: Response) {
    const data = req.body;
    const id = data.id;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const user = new User();
    user.id = id;
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.updatedAt = new Date();
    const updatedUser = await this.userRepository.updateUser(user);
    res.json(updatedUser);
  }

  async deleteUser(req: Request, res: Response) {
    const reqBody = req.body;
    const id = reqBody.id;
    const deletedUser = await this.userRepository.deleteUser(id);
    res.json(deletedUser);
  }

  async verifyUser(req: Request, res: Response) {
    const id = req.params.id;
    const user = new User();
    user.id = id;
    user.isVerified = true;
    const updatedUser = await this.userRepository.updateUser(user);
    res.json(updatedUser);
  }
}
