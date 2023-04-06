"use strict";
// src/adminjs/resources/index.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminJsResources = void 0;
const models_1 = require("../../models");
const convertion_1 = require("./convertion");
const currency_1 = require("./currency");
const user_1 = require("./user");
exports.adminJsResources = [
    {
        resource: models_1.User,
        options: user_1.userResourceOptions
    },
    {
        resource: models_1.Convertion,
        options: convertion_1.convertionResourceOptions
    },
    {
        resource: models_1.Currency,
        options: currency_1.currencyResourceOptions
    },
];
