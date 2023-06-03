import { Sequelize } from "sequelize";
import { DATABASE_URL } from "../config/environment";
// require("dotenv").config();
// require('pg')
// const DATABASE_URL = process.env.DATABASE_URL;
// const PGPORT = Number(process.env.PGPORT);
// const PGDATABASE = process.env.PGDATABASE;
// const PGHOST = process.env.PGHOST;
// const PGUSER = process.env.PGUSER;
// const PGPASSWORD = process.env.PGPASSWORD;

// const PGPORT = 5432;
// const PGDATABASE = 'currency_converter_development';
// const PGHOST = 'localhost';
// const PGUSER = 'currency_converter';
// const PGPASSWORD = 'currency_converter';

export const sequelize = new Sequelize(DATABASE_URL, {
    define: {
        underscored: true
    }
})

// export const sequelize = new Sequelize({
//     dialect: 'postgres',
//     storage: "./session.sqlite",
//     host: PGHOST,
//     port: PGPORT,
//     database: PGDATABASE,
//     username: PGUSER,
//     password: PGPASSWORD,
//     define: {
//         underscored: true
//     }
// })

// import { Sequelize } from "sequelize";

// export const sequelize = new Sequelize({
//     dialect: 'postgres',
//     host: 'localhost',
//     port: 5432,
//     database: 'onebitflix_development',
//     username: 'onebitflix',
//     password: 'onebitflix',
//     define: {
//         underscored: true
//     }
// })