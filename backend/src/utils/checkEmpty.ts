import isEmpty, { IsEmptyOptions } from 'validator/lib/isEmpty'

const checkEmpty = (
  error: (message: string) => unknown,
  options?: IsEmptyOptions
) => (value: string, fieldName: string): void => {
  if (isEmpty(value, options)) {
    throw error(`Field ${fieldName} cannot be empty!`)
  }
}

export default checkEmpty
