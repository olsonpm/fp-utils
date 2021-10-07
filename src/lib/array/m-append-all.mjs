import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default appendedValues => {
  assertArgIsType(appendedValues, 'appendedValues', 'array', 'mAppendAll')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mAppendAll')

    anArray.push(...appendedValues)
    return anArray
  }
}
