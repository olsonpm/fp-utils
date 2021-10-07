const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = appendedValues => {
  assertArgIsType(appendedValues, 'appendedValues', 'array', 'mAppendAll')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mAppendAll')

    anArray.push(...appendedValues)
    return anArray
  }
}
