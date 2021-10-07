import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default left => {
  assertArgIsType(left, 'left', 'string', 'append')

  return right => {
    assertArgIsType(right, 'right', 'string', 'append')

    return left + right
  }
}
