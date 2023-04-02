import AdminJS, { PageHandler } from "adminjs"
import { Convertion, Currency, User } from "../models"


export const dashboardOptions: {
  component?: string,
  handler?: PageHandler
} = {
  component: AdminJS.bundle('components/Dashboard.tsx'),
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