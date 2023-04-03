import express from "express";
import cors from "cors"
import { adminJs, adminJsRouter } from "./adminjs";
import { sequelize } from "./database";
import { router } from "./routes";

const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
//const db = require('./config/database'); // Importe suas configurações de banco de dados do arquivo correspondente

const app = express()

app.use(session({
    store: new pgSession({
        pool: sequelize,
        tableName: 'session'
    }),
    secret: 'sua_chave_secreta_aqui',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 dias de validade para o cookie de sessão
}));

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use(router)

app.use(adminJs.options.rootPath, adminJsRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    sequelize.authenticate().then(() => {
        console.log('DB connection successfull')
    })
    console.log(`Server started successfully at ${PORT}`)
})