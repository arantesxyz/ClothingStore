import { Request, Response, NextFunction } from 'express'
import HttpErrors, { IHttpError } from '../errors/HttpError'

export default (
  err: IHttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!err || !err.status || !err.message) {
    err = HttpErrors.INTERNAL_SERVER_ERROR()
  }

  res.status(err.status).json(err)
}
