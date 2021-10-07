import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default el => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mAppend')

  anArray.push(el)
  return anArray
}
