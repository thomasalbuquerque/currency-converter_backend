"use strict";
// src/services/userService.ts
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
exports.userService = void 0;
const models_1 = require("../models");
exports.userService = {
    findByEmail: (email) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.findOne({
            attributes: [
                'id',
                ['first_name', 'firstName'],
                'email',
                'password',
                ['created_at', 'createdAt']
            ],
            where: { email }
        });
        return user;
    }),
    create: (atributes) => __awaiter(void 0, void 0, void 0, function* () {
        const user = yield models_1.User.create(atributes);
        return user;
    }),
    update: (id, attributes) => __awaiter(void 0, void 0, void 0, function* () {
        const [affectedRows, updatedUsers] = yield models_1.User.update(attributes, { where: { id }, returning: true });
        return updatedUsers[0];
    }),
    updatePassword: (id, password) => __awaiter(void 0, void 0, void 0, function* () {
        const [affectedRows, updatedUsers] = yield models_1.User.update({
            password
        }, {
            where: { id },
            individualHooks: true,
            returning: true
        });
        return updatedUsers[0];
    }),
};
