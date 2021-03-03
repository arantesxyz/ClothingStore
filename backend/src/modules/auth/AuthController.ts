import { Request, Response } from 'express'

import { IAuthController, IAuthService } from './structures'
import validadeIAuth from './ValidadeIAuth'

export default class AuthController implements IAuthController {
  constructor(private authService: IAuthService) {}

  async login(req: Request, res: Response): Promise<void> {
    validadeIAuth(req.body)

    const user = await this.authService.authenticate(req.body)
    res.json(user)
  }
}
