import { Request, Response } from 'express'

export interface IUser {
  uid: string
  email: string
  isAdmin: boolean
}

export interface NewUser {
  email: string
  password: string
}

export interface IUserController {
  create(req: Request, res: Response): Promise<void>
}

export interface IUserService {
  create(user: NewUser): Promise<IUser>
}

export interface IUserRepository {
  emailExists(email: string): Promise<boolean>
  findByEmail(email: string): Promise<IUser>
  create(user: NewUser): Promise<IUser>
}
