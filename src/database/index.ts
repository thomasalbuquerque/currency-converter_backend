import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'currency_converter_development',
    username: 'currency_converter',
    password: 'currency_converter',
    define: {
        underscored: true
    }
})