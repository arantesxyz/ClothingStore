import bcrypt from 'bcrypt'

import BaseRepository from '../../utils/BaseRepository'
import { IUser, IUserRepository } from './structures'
import HttpError from '../../errors/HttpError'
import User from '../../database/entity/User'
import { IAuth } from '../auth/structures'
import Constants from '../../utils/Constants'
import { Repository } from 'typeorm'

export default class UserRepository
  extends BaseRepository<User>
  implements IUserRepository {
  getRepo(): Repository<User> {
    return super._getRepo(User)
  }

  async create({ email, password }: IAuth): Promise<IUser> {
    const hash = await bcrypt.hash(password, Constants.SALT_ROUNDS)

    const user = this.getRepo().create({ email, hash })
    await this.getRepo().save(user)

    return {
      uid: user.uid,
      email: user.email,
      isAdmin: user.isAdmin
    }
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.getRepo().findOne({ where: { email } })
    if (!user) {
      throw HttpError.BAD_REQUEST('User does not exist!')
    }

    return user
  }

  async emailExists(email: string): Promise<boolean> {
    try {
      return !!(await this.findByEmail(email))
    } catch {
      return false
    }
  }

  async findByAuth({ email, password }: IAuth): Promise<IUser> {
    const user = await this.getRepo().findOne({
      where: { email },
      select: ['uid', 'email', 'hash', 'isAdmin']
    })
    if (!user) {
      throw HttpError.BAD_REQUEST('User does not exist!')
    }

    const success = await bcrypt.compare(password, user.hash)
    if (!success) {
      throw HttpError.BAD_REQUEST("Password does't match!")
    }

    return {
      uid: user.uid,
      email: user.email,
      isAdmin: user.isAdmin
    }
  }
}
