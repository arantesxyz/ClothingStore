import { IUser, IUserRepository, IUserService } from './structures'
import HttpError from '../../errors/HttpError'
import { IAuth } from '../auth/structures'

export default class UserService implements IUserService {
  constructor(private userRepository: IUserRepository) {}

  async create({ email, password }: IAuth): Promise<IUser> {
    const alreadyExists = await this.userRepository.emailExists(email)
    if (alreadyExists) {
      throw HttpError.CONFLICT('Email already exists!')
    }

    return await this.userRepository.create({ email, password })
  }
}
