"use strict";
// src/routes.ts
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = require("./controllers/authController");
const convertionsController_1 = require("./controllers/convertionsController");
const currenciesController_1 = require("./controllers/currenciesController");
const auth_1 = require("./middlewares/auth");
const router = express_1.default.Router();
exports.router = router;
router.get('/', (req, res) => {
    return res.json({
        success: true,
        message: 'Sucesso!'
    });
});
router.post('/auth/register', authController_1.authController.register);
router.post('/auth/login', authController_1.authController.login);
router.get('/currencies/', currenciesController_1.currenciesController.index);
router.get('/currencies/:id', currenciesController_1.currenciesController.getRatio);
router.get('/convertions', auth_1.ensureAuth, convertionsController_1.convertionsController.index);
router.post('/convertions', auth_1.ensureAuth, convertionsController_1.convertionsController.save);
router.delete('/convertions/', auth_1.ensureAuth, convertionsController_1.convertionsController.deleteAll);
router.delete('/convertions/:id', auth_1.ensureAuth, convertionsController_1.convertionsController.delete);
