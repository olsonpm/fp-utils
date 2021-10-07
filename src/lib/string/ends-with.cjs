const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = end => {
  assertArgIsType(end, 'end', 'string', 'startsWith')

  return str => {
    assertArgIsType(str, 'str', 'string', 'startsWith')

    return str.endsWith(end)
  }
}
