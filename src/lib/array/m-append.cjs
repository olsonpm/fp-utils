const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = el => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mAppend')

  anArray.push(el)
  return anArray
}
