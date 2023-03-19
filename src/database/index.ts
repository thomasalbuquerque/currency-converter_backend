import { Sequelize } from "sequelize";

export const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    database: 'bitcoinconverter_development',
    username: 'bitcoinconverter',
    password: 'bitcoinconverter',
    define: {
        underscored: true
    }
})