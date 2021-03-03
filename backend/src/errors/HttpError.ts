export interface IHttpError {
  status: number
  message: string
}

export function craftCustomHttpError(status: number, defaultMessage: string) {
  return function (message = defaultMessage): IHttpError {
    return { status, message }
  }
}

export default {
  BAD_REQUEST: craftCustomHttpError(400, 'BAD_REQUEST'),
  UNAUTHORIZED: craftCustomHttpError(401, 'UNAUTHORIZED'),
  FORBIDDEN: craftCustomHttpError(403, 'FORBIDDEN'),
  CONFLICT: craftCustomHttpError(409, 'CONFLICT'),

  INTERNAL_SERVER_ERROR: craftCustomHttpError(500, 'INTERNAL_SERVER_ERROR')
}
