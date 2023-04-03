"use strict";
// src/services/currencyService.ts
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
exports.currencyService = void 0;
const Currency_1 = require("../models/Currency");
exports.currencyService = {
    findAll: (page, perPage) => __awaiter(void 0, void 0, void 0, function* () {
        const offset = (page - 1) * perPage;
        const currencies = yield Currency_1.Currency.findAndCountAll({
            attributes: ['id', ['currency_name', 'currencyName'], ['ratio_per_dollar', 'ratioPerDollar'], ['created_at', 'createdAt']],
            limit: perPage,
            offset
        });
        return currencies;
    }),
    findById: (id) => __awaiter(void 0, void 0, void 0, function* () {
        const currency = yield Currency_1.Currency.findByPk(id, {
            attributes: ['id', ['currency_name', 'currencyName'], ['ratio_per_dollar', 'ratioPerDollar'], ['created_at', 'createdAt']],
        });
        return currency;
    }),
};
