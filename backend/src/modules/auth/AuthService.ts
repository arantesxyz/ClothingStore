import jwt from 'jsonwebtoken'
import { AuthenticatedUser, IAuth, IAuthService } from './structures'
import HttpError from '../../errors/HttpError'
import { IUserRepository } from '../user/structures'
import Constants from '../../utils/Constants'

export default class AuthService implements IAuthService {
  constructor(private userRepository: IUserRepository) {}

  async authenticate(auth: IAuth): Promise<AuthenticatedUser> {
    try {
      const user = await this.userRepository.findByAuth(auth)
      return {
        ...user,
        token: jwt.sign({ user }, Constants.JWT_SECRET, {
          expiresIn: '30m'
        })
      }
    } catch {
      throw HttpError.FORBIDDEN("Email and password don't match!")
    }
  }
}
