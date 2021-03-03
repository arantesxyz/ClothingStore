import HttpError from '../../errors/HttpError'
import checkEmpty from '../../utils/checkEmpty'
import typeValidator from '../../utils/typeValidator'
import { IUserController, IUserService } from './structures'

export default (userService: IUserService): IUserController => {
  return {
    async create(req, res) {
      const { email, password } = req.body
      typeValidator(email, 'string', 'email')
      typeValidator(password, 'string', 'password')

      const isEmpty = checkEmpty(HttpError.BAD_REQUEST, {
        ignore_whitespace: true
      })

      isEmpty(email, 'email')
      isEmpty(password, 'password')

      const user = await userService.create({ email, password })
      res.json(user)
    }
  }
}
