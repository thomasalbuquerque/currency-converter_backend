"use strict";
// src/models/Currency.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Currency = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.Currency = database_1.sequelize.define('Currency', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    currencyName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING
    },
    ratioPerDollar: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE
    }
});
