import { User } from '~/entities';
import { sqliteDataSource } from '../utils/appDataSource.js';

export class UserRepository {
  private dataSource = sqliteDataSource;
  async getAllUsers() {
    return await this.dataSource.getRepository(User).find();
  }
  async getUserById(id: string) {
    return await this.dataSource.getRepository(User).find({
      where: {
        id: id
      }
    });
  }
  async createUser(user: User) {
    return await this.dataSource.getRepository(User).save(user);
  }
  async updateUser(user: User) {
    return await this.dataSource.getRepository(User).save(user);
  }
  async deleteUser(id: string) {
    return await this.dataSource.getRepository(User).delete(id);
  }
}
