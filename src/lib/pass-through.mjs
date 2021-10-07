import assertArgIsType from '../internal/assert-arg-is-type.mjs'

export default (val, fnArray) => {
  assertArgIsType(fnArray, 'fnArray', 'array', 'passThrough')

  return fnArray.reduce((result, fn) => fn(result), val)
}
