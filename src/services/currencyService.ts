// src/services/currencyService.ts

import { Op } from "sequelize"
import { Currency } from "../models/Currency"

export const currencyService = {
  findAll: async (page: number, perPage: number) => {
    const offset = (page - 1) * perPage

    const currencies = await Currency.findAndCountAll({
      attributes: ['id', ['currency_name', 'currencyName'], ['ratio_per_dollar', 'ratioPerDollar'], ['created_at', 'createdAt']],
      limit: perPage,
      offset
    })

    return currencies
  },
  findById: async (id: string) => {
    const currency = await Currency.findByPk(id, {
      attributes: ['id', ['currency_name', 'currencyName'], ['ratio_per_dollar', 'ratioPerDollar'], ['created_at', 'createdAt']],
    })

    return currency
  },
}