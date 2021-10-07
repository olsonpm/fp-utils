const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = wrapper => {
  assertArgIsType(wrapper, 'wrapper', 'string', 'wrapIn')

  return str => {
    assertArgIsType(str, 'str', 'string', 'wrapIn')
    return wrapper + str + wrapper
  }
}
