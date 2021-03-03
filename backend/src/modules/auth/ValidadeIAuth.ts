import HttpError from '../../errors/HttpError'
import checkEmpty from '../../utils/checkEmpty'
import typeValidator from '../../utils/typeValidator'
import isEmail from 'validator/lib/isEmail'
import { IAuth } from './structures'

const isEmpty = checkEmpty(HttpError.BAD_REQUEST, {
  ignore_whitespace: true
})

export default function validadeIAuth({ email, password }: IAuth): void {
  typeValidator(email, 'string', 'email')
  typeValidator(password, 'string', 'password')

  isEmpty(email, 'email')
  isEmpty(password, 'password')

  if (!isEmail(email)) {
    throw HttpError.BAD_REQUEST('Invalid email format!')
  }
}
