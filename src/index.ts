import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors"
import { adminJs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";
import { router } from "./routes";

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

// // load dependencies  
// const session = require("express-session");

// // initalize sequelize with session store
// const SequelizeStore = require("connect-session-sequelize")(session.Store);

// // create database, ensure 'sqlite3' in your package.json 
// const myStore = new SequelizeStore({
//     db: sequelize,
// });
// // configure express 
// app.use(
//     session({
//         secret: "keyboard cat",
//         store: myStore,
//         resave: false, // we support the touch method so per the express-session docs this should be set to false
//         proxy: true, // if you do SSL outside of node. 
//         cookie: { secure: true, maxAge: 420000 },
//         saveUninitialized: false

//     })
// );
// myStore.sync()

// const cookieParser = require('cookie-parser');
// const expressSession = require('express-session');
// const SessionStore = require('express-session-sequelize')(expressSession.Store);

// const Sequelize = require('sequelize');
// const myDatabase = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mysql',
// });
// // create database, ensure 'sqlite3' in your package.json 

// const sequelizeSessionStore = new SessionStore({
//     db: sequelize,
// });

// app.use(cookieParser());
// app.use(expressSession({
//     secret: 'keep it secret, keep it safe.',
//     store: sequelizeSessionStore,
//     resave: false,
//     saveUninitialized: false,
//     proxy: true,
//     cookie: { secure: true, maxAge: 420000 },
// }));
// continue as normal

/*
var cookieSession = require('cookie-session')

app.use(cookieSession({
    name: 'session',
    keys: ['7483626'],

    // Cookie Options
    maxAge: 24 * 60 * 60 * 1000 // 24 hours
}))
*/

app.use(router)

// app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started successfully at ${PORT}`)
})