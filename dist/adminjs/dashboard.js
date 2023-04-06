"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardOptions = void 0;
const adminjs_1 = __importDefault(require("adminjs"));
const models_1 = require("../models");
// const componentLoader = new ComponentLoader()
// const Components = {
//   Dashboard: componentLoader.add('Dashboard', './components/Dashboard'),
//   // other custom components
// }
exports.dashboardOptions = {
    component: adminjs_1.default.bundle('./components/Dashboard'),
    handler: (req, res, context) => __awaiter(void 0, void 0, void 0, function* () {
        const currencies = yield models_1.Currency.count();
        const convertions = yield models_1.Convertion.count();
        const standardUsers = yield models_1.User.count({ where: { role: 'user' } });
        res.json({
            'Moedas': currencies,
            'Conversões': convertions,
            'Usuários': standardUsers
        });
    }),
};
