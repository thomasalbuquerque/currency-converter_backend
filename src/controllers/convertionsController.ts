// src/controllers/favoritesController.ts

import { Response } from 'express';
import { AuthenticatedRequest } from '../middlewares/auth';
import { convertionService } from '../services/convertionService';

export const convertionsController = {
  // GET /convertions
  index: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;

    try {
      const convertions = await convertionService.findByUserId(userId);
      return res.json(convertions);
    } catch (error) {
      if (error instanceof Error) {
        return res.status(400).json({ message: error.message });
      }
    }
  },

  // POST /convertions
  save: async (req: AuthenticatedRequest, res: Response) => {
    const userId = req.user!.id;
    const { fromCurrencyId, toCurrencyId, fromCurrencyName, toCurrencyName, fromCurrencyValue, toCurrencyValue, fromCurrencyRatio, toCurrencyRatio } =
      req.body;

    try {
      const convertion = await convertionService.create(
        userId,
        fromCurrencyId,
        toCurrencyId,
        fromCurrencyName,
        toCurrencyName,
        fromCurrencyValue,
        toCurrencyValue,
        fromCurrencyRatio,
        toCurrencyRatio
      );
      return res.status(201).json(convertion);
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message });
      }
    }
  },

  // DELETE /convertions/:id
  delete: async (req: AuthenticatedRequest, res: Response) => {
    const convertionId = req.params.id;

    try {
      await convertionService.delete(Number(convertionId));
      return res.status(204).send();
    } catch (err) {
      if (err instanceof Error) {
        return res
          .status(400)
          .json({
            message:
              err.message
          });
      }
    }
  },
};
