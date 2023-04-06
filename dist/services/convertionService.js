"use strict";
// src/services/convertionService.ts
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertionService = void 0;
const models_1 = require("../models");
exports.convertionService = {
    findByUserId: (userId) => __awaiter(void 0, void 0, void 0, function* () {
        const convertions = yield models_1.Convertion.findAll({
            attributes: ['id',
                ['user_id', 'userId'],
                ['from_currency_id', 'fromCurrencyId'],
                ['to_currency_id', 'toCurrencyId'],
                ['from_currency_name', 'fromCurrencyName'],
                ['to_currency_name', 'toCurrencyName'],
                ['from_currency_value', 'fromCurrencyValue'],
                ['to_currency_value', 'toCurrencyValue'],
                ['from_currency_ratio', 'fromCurrencyRatio'],
                ['to_currency_ratio', 'toCurrencyRatio'],
                ['created_at', 'createdAt']],
            where: { userId }
        });
        return convertions;
    }),
    create: (userId, fromCurrencyId, toCurrencyId, fromCurrencyName, toCurrencyName, fromCurrencyValue, toCurrencyValue, fromCurrencyRatio, toCurrencyRatio) => __awaiter(void 0, void 0, void 0, function* () {
        const convertion = yield models_1.Convertion.create({
            userId,
            fromCurrencyId,
            toCurrencyId,
            fromCurrencyName,
            toCurrencyName,
            fromCurrencyValue,
            toCurrencyValue,
            fromCurrencyRatio,
            toCurrencyRatio
        });
        return convertion;
    }),
    delete: (id) => __awaiter(void 0, void 0, void 0, function* () {
        yield models_1.Convertion.destroy({
            where: {
                id
            }
        });
    }),
    deleteAll: () => __awaiter(void 0, void 0, void 0, function* () {
        yield models_1.Convertion.destroy({
            where: {},
            truncate: true
        });
    }),
};
