import { Request, Response } from 'express';
import { User } from '../entities/index.js';
import { sqliteDataSource } from '../utils/appDataSource.js';

export class UsersController {
  async getAllUsers(req: Request, res: Response) {
    const users = await sqliteDataSource.getRepository(User).find();
    res.json(users);
  }

  async getUserById(req: Request, res: Response) {
    const id = req.params.id;
    const user = await sqliteDataSource.getRepository(User).find({
      where: {
        id: id
      }
    });
    if (!user.length) {
      return res.json({
        message: 'User not found'
      });
    }
    return res.json(user);
  }

  async createUser(req: Request, res: Response) {
    const data = req.body;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const profileUrl = data.profileUrl;
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.email = email;
    user.createdAt = new Date();
    const newUser = await sqliteDataSource.getRepository(User).save(user);
    res.json(newUser);
  }

  async updateUser(req: Request, res: Response) {
    const data = req.body;
    const id = data.id;
    const firstName = data.firstName;
    const lastName = data.lastName;
    const email = data.email;
    const user = await sqliteDataSource.getRepository(User).find({
      where: {
        id
      }
    });
    if (user.length > 0) {
    user[0].firstName = firstName?? user[0].firstName;
    user[0].lastName = lastName?? user[0].lastName;
    user[0].email = email?? user[0].email;
    user[0].updatedAt = new Date();
    const updatedUser = await sqliteDataSource.getRepository(User).save(user[0]);
    res.json(updatedUser);
    } else {
      return res.json({
        message: 'User not found'
      });
    }
  }

  async deleteUser(req: Request, res: Response) {
    const reqParam = req.params;
    const id = reqParam.id;
    const deletedUser = await sqliteDataSource.getRepository(User).find({
      where: {
        id: id
      }
    });
    await sqliteDataSource.getRepository(User).delete(id);
    res.json({
      message: 'User deleted successfully',
      deletedUser
    });
  }

  async verifyUser(req: Request, res: Response) {
    const id = req.params.id;
    const user = await sqliteDataSource.getRepository(User).find({
      where: {
        id
      }
    });
    if (user.length > 0) {
      if (user[0].isVerified === true) {
        return res.json({
          message: 'User already verified'
        });
      }
      user[0].isVerified = true;
      user[0].updatedAt = new Date();
      await sqliteDataSource.getRepository(User).save(user[0]);
      return res.json({
        message: 'User verified successfully',
        user
      });
    } else {
      return res.json({
        message: 'User not found'
      });
    }
  }
}
