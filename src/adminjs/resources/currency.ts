// src/adminjs/resources/currency.ts

import { FeatureType, ResourceOptions } from 'adminjs'

export const currencyResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['currencyName', 'ratioPerDollar'],
  filterProperties: ['currencyName', 'ratioPerDollar', 'createdAt', 'updatedAt'],
  listProperties: ['id', 'currencyName', 'ratioPerDollar', 'createdAt', 'updatedAt'],
  showProperties: ['id', 'currencyName', 'ratioPerDollar', 'createdAt', 'updatedAt']
}