import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import HttpError from '../errors/HttpError'
import { IUser } from '../modules/user/structures'
import Constants from '../utils/Constants'

interface IPayLoad {
  user: IUser
  iat: number
  exp: number
}

export default (req: Request, res: Response, next: NextFunction): void => {
  const { authorization } = req.headers
  if (!authorization) {
    throw HttpError.UNAUTHORIZED('Authorization header not present!')
  }

  const token = authorization.replace('Bearer', '').trim()

  try {
    const { user } = jwt.verify(token, Constants.JWT_SECRET) as IPayLoad
    req.user = user

    return next()
  } catch {
    throw HttpError.UNAUTHORIZED('Token not valid!')
  }
}
