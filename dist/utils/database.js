import { Sequelize } from 'sequelize';
export const sequelize = new Sequelize("nodePractice", "blackkspydo", "0897", {
    dialect: "mariadb",
    host: "localhost",
    database: "nodePractice", port: 3306,
});
