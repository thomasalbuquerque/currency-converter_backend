require("dotenv").config();
import 'pg';

const DATABASE_URL = process.env.DATABASE_URL;
const PGPORT = process.env.PGPORT;
const PGDATABASE = process.env.PGDATABASE;
const PGHOST = process.env.PGHOST;
const PGUSER = process.env.PGUSER;
const PGPASSWORD = process.env.PGPASSWORD;

// const PGPORT = 5432;
// const PGDATABASE = 'currency_converter_development';
// const PGHOST = 'localhost';
// const PGUSER = 'currency_converter';
// const PGPASSWORD = 'currency_converter';

export const development = {
    dialect: 'postgres',
    host: PGHOST,
    port: PGPORT,
    database: PGDATABASE,
    username: PGUSER,
    password: PGPASSWORD,
};
// module.exports = {
//     development: {
//         dialect: 'postgres',
//         host: 'containers-us-west-19.railway.app',
//         port: 7269,
//         database: 'railway',
//         username: 'postgres',
//         password: 'PVWTw6oMzKCaEQqtcGV6'
//     }
// }