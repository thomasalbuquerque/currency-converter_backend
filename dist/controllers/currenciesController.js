"use strict";
// src/controllers/currenciesController.ts
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
exports.currenciesController = void 0;
const getPaginationParams_1 = require("../helpers/getPaginationParams");
const currencyService_1 = require("../services/currencyService");
exports.currenciesController = {
    // GET /currencies/
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const [page, perPage] = (0, getPaginationParams_1.getPaginationParams)(req.query);
        try {
            const currency = yield currencyService_1.currencyService.findAll(page, perPage);
            if (!currency)
                return res.status(404).json({ message: 'Moeda não encontrada' });
            return res.json(currency.rows);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // GET /currencies/:id
    getRatio: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const currencyId = req.params.id;
        try {
            const currency = yield currencyService_1.currencyService.findById(currencyId);
            if (!currency)
                return res.status(404).json({ message: 'Moeda não encontrada' });
            return res.json(Object.assign({}, currency.get()));
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
};
