import { Request, Response, NextFunction } from 'express'
import HttpError, { IHttpError } from '../errors/HttpError'

export default (
  err: IHttpError,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  if (!err || !err.status || !err.message) {
    err = HttpError.INTERNAL_SERVER_ERROR()
  }

  res.status(err.status).json(err)
}
