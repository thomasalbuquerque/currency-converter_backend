// src/models/Currency.ts

import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Currency {
  id: number
  currencyName: string
  ratioPerDollar: number
  createdAt: Date
}

export interface CurrencyCreationAttributes extends Optional<Currency, 'id'> { }

export interface CurrencyInstance extends Model<Currency, CurrencyCreationAttributes>, Currency { }

export const Currency = sequelize.define<CurrencyInstance, Currency>('Currency', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  currencyName: {
    allowNull: false,
    type: DataTypes.STRING
  },
  ratioPerDollar: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  createdAt: {
    type: DataTypes.DATE
  }
})