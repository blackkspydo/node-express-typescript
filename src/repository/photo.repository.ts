import { sqliteDataSource } from '../utils/appDataSource.js';
import { Photo } from '../entities/index.js';

export class PhotoRepository {
  private dataSource = sqliteDataSource;
  async addPhoto(photo: Photo) {
    return await this.dataSource.getRepository(Photo).save(photo);
  }
  async deletePhoto(id: string) {
    return await this.dataSource.getRepository(Photo).delete(id);
  }
}
