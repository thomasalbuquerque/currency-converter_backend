// src/controllers/currenciesController.ts

import { Request, Response } from 'express'
import { getPaginationParams } from '../helpers/getPaginationParams'
import { currencyService } from '../services/currencyService'

export const currenciesController = {
  // GET /currencies/
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const currency = await currencyService.findAll(page, perPage)

      if (!currency) return res.status(404).json({ message: 'Moeda não encontrada' })

      return res.json(currency.rows)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  // GET /currencies/:id
  getRatio: async (req: Request, res: Response) => {
    const currencyId = req.params.id

    try {
      const currency = await currencyService.findById(currencyId)

      if (!currency) return res.status(404).json({ message: 'Moeda não encontrada' })

      return res.json({ ...currency.get() })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
}