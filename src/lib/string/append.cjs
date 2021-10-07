const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = right => {
  assertArgIsType(right, 'right', 'string', 'append')

  return left => {
    assertArgIsType(left, 'left', 'string', 'append')

    return left + right
  }
}
