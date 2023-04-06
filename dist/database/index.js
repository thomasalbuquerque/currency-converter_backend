"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
require("dotenv").config();
require('pg');
const DATABASE_URL = process.env.DATABASE_URL;
const PGPORT = Number(process.env.PGPORT);
const PGDATABASE = process.env.PGDATABASE;
const PGHOST = process.env.PGHOST;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD;
console.log(typeof (PGUSER));
console.log(typeof (PGPASSWORD));
exports.sequelize = new sequelize_1.Sequelize({
    dialect: 'postgres',
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
    define: {
        underscored: true
    }
});
// export const sequelize = new Sequelize({
//     dialect: 'postgres',
//     host: 'containers-us-west-19.railway.app',
//     port: 7269,
//     database: 'railway',
//     username: 'postgres',
//     password: 'PVWTw6oMzKCaEQqtcGV6',
//     define: {
//         underscored: true
//     }
// })
