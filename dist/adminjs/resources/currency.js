"use strict";
// src/adminjs/resources/currency.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.currencyResourceOptions = void 0;
exports.currencyResourceOptions = {
    navigation: 'Catálogo',
    editProperties: ['currencyName', 'ratioPerDollar'],
    filterProperties: ['currencyName', 'ratioPerDollar', 'createdAt', 'updatedAt'],
    listProperties: ['id', 'currencyName', 'ratioPerDollar', 'createdAt', 'updatedAt'],
    showProperties: ['id', 'currencyName', 'ratioPerDollar', 'createdAt', 'updatedAt']
};
