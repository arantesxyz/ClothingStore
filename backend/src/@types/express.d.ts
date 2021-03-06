import { IUser } from '../modules/user/structures'

declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}
