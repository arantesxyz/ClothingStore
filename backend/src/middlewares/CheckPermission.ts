import { Request, Response, NextFunction } from 'express'
import HttpError from '../errors/HttpError'

export default (permission: string) => (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  // Implement simple admin only permission system, this is ready for
  // future updates where a permission system would be implemented
  if (permission !== 'admin' || !req.user.isAdmin) {
    throw HttpError.FORBIDDEN('Only admins can access this resource!')
  }

  return next()
}
