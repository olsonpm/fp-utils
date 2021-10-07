import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default right => {
  assertArgIsType(right, 'right', 'string', 'append')

  return left => {
    assertArgIsType(left, 'left', 'string', 'append')

    return left + right
  }
}
