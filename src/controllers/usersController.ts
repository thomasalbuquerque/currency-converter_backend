// src/controllers/usersController.ts

import { Response } from "express";
import { AuthenticatedRequest } from "../middlewares/auth";
import { userService } from "../services/userService";

export const usersController = {

  // GET /users/current
  show: async (req: AuthenticatedRequest, res: Response) => {

    try {
      const currentUser = req.user
      return res.json(currentUser)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // PUT /users/current
  update: async (req: AuthenticatedRequest, res: Response) => {
    const { id } = req.user!
    const { firstName, email } = req.body

    try {
      const updatedUser = await userService.update(id, {
        firstName,
        email,
      })

      return res.json(updatedUser)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  // PUT /users/current/password
  updatePassword: async (req: AuthenticatedRequest, res: Response) => {
    const user = req.user
    const { currentPassword, newPassword } = req.body

    if (!user) {
      return res.status(401).json({ message: 'Não autorizado!' })
    }

    try {
      user.checkPassword(currentPassword, async (err, isSame) => {
        if (err) {
          //throw err
          return res.status(400).json({ message: err.message })
        }

        if (!isSame) {
          //throw new Error('Senha incorreta')
          return res.status(400).json({ message: 'Senha incorreta' })
        }

        await userService.updatePassword(user.id, newPassword)
        return res.status(204).send()
      })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
}