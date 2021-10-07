const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = appendedValues => {
  assertArgIsType(appendedValues, 'appendedValues', 'array', 'appendAll')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'appendAll')

    return anArray.concat(appendedValues)
  }
}
