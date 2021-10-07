const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = separator => {
  assertArgIsType(separator, 'separator', 'string', 'splitOn')

  return str => {
    assertArgIsType(str, 'str', 'string', 'splitOn')

    return str.split(separator)
  }
}
