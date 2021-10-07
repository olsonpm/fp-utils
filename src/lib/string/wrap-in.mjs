import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default wrapper => {
  assertArgIsType(wrapper, 'wrapper', 'string', 'wrapIn')

  return str => {
    assertArgIsType(str, 'str', 'string', 'wrapIn')
    return wrapper + str + wrapper
  }
}
