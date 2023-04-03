"use strict";
// src/models/Currency.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.Convertion = void 0;
const database_1 = require("../database");
const sequelize_1 = require("sequelize");
exports.Convertion = database_1.sequelize.define('Convertion', {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER
    },
    userId: {
        allowNull: false,
        primaryKey: false,
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'users',
            key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
    },
    fromCurrencyId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    toCurrencyId: {
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER,
    },
    fromCurrencyName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    toCurrencyName: {
        allowNull: false,
        type: sequelize_1.DataTypes.STRING,
    },
    fromCurrencyValue: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL
    },
    toCurrencyValue: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL
    },
    fromCurrencyRatio: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL
    },
    toCurrencyRatio: {
        allowNull: false,
        type: sequelize_1.DataTypes.DECIMAL
    },
    created_at: {
        type: sequelize_1.DataTypes.DATE
    },
});
