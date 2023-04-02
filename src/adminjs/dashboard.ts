import AdminJS, { PageHandler } from "adminjs"
import { Convertion, Currency, User } from "../models"
import { ComponentLoader } from 'adminjs'

// const componentLoader = new ComponentLoader()

// const Components = {
//   Dashboard: componentLoader.add('Dashboard', './components/Dashboard'),
//   // other custom components
// }

export const dashboardOptions: {
  handler?: PageHandler
} = {
  handler: async (req, res, context) => {
    const currencies = await Currency.count()
    const convertions = await Convertion.count()
    const standardUsers = await User.count({ where: { role: 'user' } })

    res.json({
      'Moedas': currencies,
      'Conversões': convertions,
      'Usuários': standardUsers
    })
  },
}