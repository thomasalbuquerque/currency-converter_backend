"use strict";
// src/adminjs/resources/user.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.userResourceOptions = void 0;
const userResourceOptions = {
    navigation: 'Administração',
    properties: {
        password: {
            type: 'password'
        },
        role: {
            availableValues: [
                { value: 'admin', label: 'Administrador' },
                { value: 'user', label: 'Usuário Padrão' }
            ]
        }
    },
    editProperties: [
        'firstName',
        'email',
        'password',
        'role'
    ],
    filterProperties: [
        'firstName',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
    listProperties: [
        'id',
        'firstName',
        'email',
        'role'
    ],
    showProperties: [
        'id',
        'firstName',
        'email',
        'role',
        'createdAt',
        'updatedAt'
    ],
};
exports.userResourceOptions = userResourceOptions;
