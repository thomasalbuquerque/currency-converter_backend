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
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
// load dependencies  
const session = require("express-session");
// initalize sequelize with session store
const SequelizeStore = require("connect-session-sequelize")(session.Store);
// create database, ensure 'sqlite3' in your package.json 
const myStore = new SequelizeStore({
    db: database_1.sequelize,
});
// configure express 
app.use(session({
    secret: "keyboard cat",
    store: myStore,
    resave: false,
    proxy: true,
    cookie: { secure: true, maxAge: 420000 },
    saveUninitialized: false
}));
myStore.sync();
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
app.use(routes_1.router);
app.use(adminjs_1.adminJs.options.rootPath, adminjs_1.adminJsRouter);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    database_1.sequelize.authenticate().then(() => {
        console.log('DB connection successfull');
    });
    console.log(`Server started successfully at ${PORT}`);
});
