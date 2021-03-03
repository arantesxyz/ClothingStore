import { Request, Response } from 'express'

import validadeIAuth from '../auth/ValidadeIAuth'
import { IUserController, IUserService } from './structures'

export default class UserController implements IUserController {
  constructor(private userService: IUserService) {}

  async create(req: Request, res: Response): Promise<void> {
    validadeIAuth(req.body)

    const user = await this.userService.create(req.body)
    res.json(user)
  }
}
