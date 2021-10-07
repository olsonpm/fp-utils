const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = prefix => {
  assertArgIsType(prefix, 'prefix', 'string', 'startsWith')

  return str => {
    assertArgIsType(str, 'str', 'string', 'startsWith')

    return str.startsWith(prefix)
  }
}
