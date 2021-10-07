import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default appendedValues => {
  assertArgIsType(appendedValues, 'appendedValues', 'array', 'appendAll')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'appendAll')

    return anArray.concat(appendedValues)
  }
}
