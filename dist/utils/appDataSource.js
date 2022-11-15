import { DataSource } from "typeorm";
import { User } from "../entity/User/user.entity.js";
export const myDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "blackkspydo",
    password: "0897",
    database: "nodePractice",
    entities: [User],
    logging: true,
    synchronize: true,
    socketPath: '/var/run/mysqld/mysqld.sock'
});
