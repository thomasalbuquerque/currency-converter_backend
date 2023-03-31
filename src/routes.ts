// src/routes.ts

import express from 'express'
import { authController } from './controllers/authController'
import { convertionsController } from './controllers/convertionsController'
import { currenciesController } from './controllers/currenciesController'
import { ensureAuth } from './middlewares/auth'

const router = express.Router()

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/currencies/', currenciesController.index)
router.get('/currencies/:id', currenciesController.getRatio)

router.get('/convertions', ensureAuth, convertionsController.index)
router.post('/convertions', ensureAuth, convertionsController.save)
router.delete('/convertions/', ensureAuth, convertionsController.deleteAll)
router.delete('/convertions/:id', ensureAuth, convertionsController.delete)

export { router }