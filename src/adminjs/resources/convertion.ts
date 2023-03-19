// src/adminjs/resources/convertion.ts

import { ResourceOptions } from "adminjs";

export const convertionResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['userId', 'fromCurrencyId', 'toCurrencyId', 'fromCurrencyName', 'toCurrencyName', 'fromCurrencyValue', 'toCurrencyValue', 'createdAt', 'updatedAt'],
  filterProperties: ['fromCurrencyId', 'toCurrencyId', 'fromCurrencyName', 'toCurrencyName', 'fromCurrencyValue', 'toCurrencyValue', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'userId', 'fromCurrencyId', 'toCurrencyId', 'fromCurrencyName', 'toCurrencyName', 'fromCurrencyValue', 'toCurrencyValue', 'createdAt', 'updatedAt'],
  showProperties: ['id', 'userId', 'fromCurrencyId', 'toCurrencyId', 'fromCurrencyName', 'toCurrencyName', 'fromCurrencyValue', 'toCurrencyValue', 'createdAt', 'updatedAt']
}