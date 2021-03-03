import HttpError from '../errors/HttpError'

/**
 *
 * @param {Unknown} object Any type to be validated
 * @param {String | Array<String>} acceptedTypes Type name to validade
 * @param {String | Function} action? Field name for error or custom function
 *  to be executed instead of throwing the error
 */
export default function typeValidator(
  object: unknown,
  acceptedTypes: string | Array<string>,
  action: string | ((type: string) => void)
): void {
  const arr: Array<string> = []
  const type = arr.concat(acceptedTypes).map(item => item.toLowerCase())

  if (object === null && type.includes('null')) return

  const objectType = Array.isArray(object) ? 'array' : typeof object
  if (type.includes(objectType)) return

  if (action instanceof Function) {
    return action(objectType)
  }

  throw HttpError.BAD_REQUEST(
    `Expected ${action} to be of type ${type.join(
      '/'
    )} but received ${objectType}`
  )
}
