import { Request, Response } from 'express'
import { IUser } from '../user/structures'

export interface IAuth {
  email: string
  password: string
}

export interface AuthenticatedUser extends IUser {
  token: string
}

export interface IAuthController {
  login(req: Request, res: Response): Promise<void>
}

export interface IAuthService {
  authenticate(Auth: IAuth): Promise<AuthenticatedUser>
}
