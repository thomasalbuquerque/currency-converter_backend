"use strict";
// src/controllers/favoritesController.ts
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
exports.convertionsController = void 0;
const convertionService_1 = require("../services/convertionService");
exports.convertionsController = {
    // GET /convertions
    index: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        try {
            const convertions = yield convertionService_1.convertionService.findByUserId(userId);
            return res.json(convertions);
        }
        catch (error) {
            if (error instanceof Error) {
                return res.status(400).json({ message: error.message });
            }
        }
    }),
    // POST /convertions
    save: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const userId = req.user.id;
        const { fromCurrencyId, toCurrencyId, fromCurrencyName, toCurrencyName, fromCurrencyValue, toCurrencyValue, fromCurrencyRatio, toCurrencyRatio } = req.body;
        try {
            const convertion = yield convertionService_1.convertionService.create(userId, fromCurrencyId, toCurrencyId, fromCurrencyName, toCurrencyName, fromCurrencyValue, toCurrencyValue, fromCurrencyRatio, toCurrencyRatio);
            return res.status(201).json(convertion);
        }
        catch (err) {
            if (err instanceof Error) {
                return res.status(400).json({ message: err.message });
            }
        }
    }),
    // DELETE /convertions/:id
    delete: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        const convertionId = req.params.id;
        try {
            yield convertionService_1.convertionService.delete(Number(convertionId));
            return res.status(204).send();
        }
        catch (err) {
            if (err instanceof Error) {
                return res
                    .status(400)
                    .json({
                    message: err.message
                });
            }
        }
    }),
    // DELETE /convertions/
    deleteAll: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            yield convertionService_1.convertionService.deleteAll();
            return res.status(204).send();
        }
        catch (err) {
            if (err instanceof Error) {
                return res
                    .status(400)
                    .json({
                    message: err.message
                });
            }
        }
    }),
};
