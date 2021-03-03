import { Request, Response } from 'express'
import { IAuth } from '../auth/structures'

export interface IUser {
  readonly uid: string
  email: string
  isAdmin: boolean
}
export interface IUserController {
  create(req: Request, res: Response): Promise<void>
}

export interface IUserService {
  create(user: IAuth): Promise<IUser>
}

export interface IUserRepository {
  emailExists(email: string): Promise<boolean>
  findByEmail(email: string): Promise<IUser>
  create(auth: IAuth): Promise<IUser>
  findByAuth(auth: IAuth): Promise<IUser>
}
