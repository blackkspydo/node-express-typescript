import { DataSource } from 'typeorm';
import { User } from '../entities/index.js';
import { Profile } from '../entities/index.js';
import { Photo } from '../entities/index.js';
import { Order } from '../entities/index.js';
import { rootPath } from './path.js';
const entities = [User, Profile, Photo, Order];

export const myDataSource = new DataSource({
  type: 'mariadb',
  host: 'localhost',
  port: 3306,
  username: 'blackkspydo',
  password: '0897',
  database: 'nodePractice',
  entities,
  logging: true,
  synchronize: true,
  socketPath: '/var/run/mysqld/mysqld.sock'
});

export const sqliteDataSource = new DataSource({
  type: 'sqlite',
  database: `${rootPath}/database.sqlite`,
  entities,
  logging: true,
  synchronize: true
});
