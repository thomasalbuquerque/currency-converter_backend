// src/services/userService.ts

import { User } from '../models'
import { UserCreationAttributes } from '../models/User'

export const userService = {
  findByEmail: async (email: string) => {
    const user = await User.findOne({
      attributes: [
        'id',
        ['first_name', 'firstName'],
        'email',
        'password',
        ['created_at', 'createdAt']
      ],
      where: { email }
    })
    return user
  },

  create: async (atributes: UserCreationAttributes) => {
    const user = await User.create(atributes)
    return user
  },

  update: async (id: number, attributes: {
    firstName: string
    email: string
  }) => {
    const [affectedRows, updatedUsers] = await User.update(attributes, { where: { id }, returning: true })

    return updatedUsers[0]
  },

  updatePassword: async (id: string | number, password: string) => {
    const [affectedRows, updatedUsers] = await User.update({
      password
    }, {
      where: { id },
      individualHooks: true,
      returning: true
    })

    return updatedUsers[0]
  },
}