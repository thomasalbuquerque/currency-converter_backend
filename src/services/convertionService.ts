// src/services/convertionService.ts

import { Convertion } from "../models"

export const convertionService = {
  findByUserId: async (userId: number) => {
    const convertions = await Convertion.findAll({
      attributes: ['id',
        ['user_id', 'userId'],
        ['from_currency_id', 'fromCurrencyId'],
        ['to_currency_id', 'toCurrencyId'],
        ['from_currency_name', 'fromCurrencyName'],
        ['to_currency_name', 'toCurrencyName'],
        ['from_currency_value', 'fromCurrencyValue'],
        ['to_currency_value', 'toCurrencyValue'],
        ['created_at', 'createdAt']],
      where: { userId }
    })

    return convertions
  },

  create: async (userId: number,
    fromCurrencyId: number, toCurrencyId: number,
    fromCurrencyName: string, toCurrencyName: string,
    fromCurrencyValue: number, toCurrencyValue: number,) => {
    const convertion = await Convertion.create({
      userId,
      fromCurrencyId,
      toCurrencyId,
      fromCurrencyName,
      toCurrencyName,
      fromCurrencyValue,
      toCurrencyValue,
    })

    return convertion
  },

  delete: async (id: number) => {
    await Convertion.destroy({
      where: {
        id
      }
    })
  },
}