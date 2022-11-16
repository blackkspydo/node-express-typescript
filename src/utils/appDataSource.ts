import { DataSource } from "typeorm"
import { User } from "../entity/user.entity.js"
import { Profile } from "../entity/profile.entity.js"
export const myDataSource = new DataSource({
    type: "mariadb",
    host: "localhost",
    port: 3306,
    username: "blackkspydo",
    password: "0897",
    database: "nodePractice",
    entities: [User,Profile],
    logging: true,
    synchronize: true,
    socketPath: '/var/run/mysqld/mysqld.sock'
})