"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const adminjs_1 = require("./adminjs");
const database_1 = require("./database");
const routes_1 = require("./routes");
const session = require('express-session');
const pgSession = require('connect-pg-simple')(session);
//const db = require('./config/database'); // Importe suas configurações de banco de dados do arquivo correspondente
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(session({
    store: new pgSession({
        pool: database_1.sequelize,
        tableName: 'session'
    }),
    secret: 'sua_chave_secreta_aqui',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 24 * 60 * 60 * 1000 } // 30 dias de validade para o cookie de sessão
}));
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(routes_1.router);
app.use(adminjs_1.adminJs.options.rootPath, adminjs_1.adminJsRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    database_1.sequelize.authenticate().then(() => {
        console.log('DB connection successfull');
    });
    console.log(`Server started successfully at ${PORT}`);
});
