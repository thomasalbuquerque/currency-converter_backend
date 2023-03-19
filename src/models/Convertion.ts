// src/models/Currency.ts

import { sequelize } from '../database'
import { DataTypes, Model, Optional } from 'sequelize'

export interface Convertion {
  id: number
  userId: number
  fromCurrencyId: number
  toCurrencyId: number
  fromCurrencyName: string
  toCurrencyName: string
  fromCurrencyValue: number
  toCurrencyValue: number
  created_at: Date
}

export interface ConvertionCreationAttributes extends Optional<Convertion, 'id' | 'created_at'> { }

export interface ConvertionInstance extends Model<Convertion, ConvertionCreationAttributes>, Convertion { }

export const Convertion = sequelize.define<ConvertionInstance, Convertion>('Convertion', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  userId: {
    allowNull: false,
    primaryKey: false,
    type: DataTypes.INTEGER,
    references: {
      model: 'users',
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'CASCADE'
  },
  fromCurrencyId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  toCurrencyId: {
    allowNull: false,
    type: DataTypes.INTEGER,
  },
  fromCurrencyName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  toCurrencyName: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  fromCurrencyValue: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  toCurrencyValue: {
    allowNull: false,
    type: DataTypes.DECIMAL
  },
  created_at: {
    type: DataTypes.DATE
  },
})