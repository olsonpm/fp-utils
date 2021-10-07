const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = left => {
  assertArgIsType(left, 'left', 'string', 'append')

  return right => {
    assertArgIsType(right, 'right', 'string', 'append')

    return left + right
  }
}
