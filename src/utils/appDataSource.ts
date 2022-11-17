import { DataSource } from "typeorm"
import { User } from "../entity/user.entity.js"
import { Profile } from "../entity/profile.entity.js"
import { Photo } from "../entity/photo.entity.js"
import { Order } from "../entity/order.entity.js";

const entities = [User, Profile, Photo, Order]


export const myDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "blackkspydo",
    password: "0897",
    database: "nodePractice",
    entities,
    logging: true,
    synchronize: true,
    socketPath: '/var/run/mysqld/mysqld.sock'
})