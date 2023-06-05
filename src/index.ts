import dotenv from "dotenv"
dotenv.config()
import express from "express";
import cors from "cors"
import { sequelize } from "./database";
import { router } from "./routes";

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

import session = require("express-session")
import connectSession from "connect-session-sequelize"
import { COOKIE_PASSWORD } from "./config/environment";
const SequelizeStore = connectSession(session.Store)
const store = new SequelizeStore({ db: sequelize })

app.use(
    session({
        secret: COOKIE_PASSWORD,
        store: store,
        resave: false, // we support the touch method so per the express-session docs this should be set to false
        proxy: true, // if you do SSL outside of node. 
        saveUninitialized: false
    })
);
store.sync()

app.use(router)

// app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started successfully at ${PORT}`)
})