import { IUserRepository, IUserService } from './structures'
import HttpError from '../../errors/HttpError'

import isEmail from 'validator/lib/isEmail'

export default (userRepository: IUserRepository): IUserService => {
  return {
    async create({ email, password }) {
      if (!isEmail(email)) {
        throw HttpError.BAD_REQUEST('Invalid email format!')
      }

      const alreadyExists = await userRepository.emailExists(email)
      if (alreadyExists) {
        throw HttpError.BAD_REQUEST('Email already exists!')
      }

      return await userRepository.create({ email, password })
    }
  }
}
