const assertArgIsType = require('../internal/assert-arg-is-type.cjs')

module.exports = (val, fnArray) => {
  assertArgIsType(fnArray, 'fnArray', 'array', 'passThrough')

  return fnArray.reduce((result, fn) => fn(result), val)
}
