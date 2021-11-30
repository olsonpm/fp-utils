const truncateToNChars = require('../../internal/string/truncate-to-n-chars.cjs')
const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = numChars => {
  if (!Number.isInteger(numChars))
    throw new Error('numChars must be an integer')

  return str => {
    assertArgIsType(str, 'str', 'string', 'truncateToNChars')

    return truncateToNChars(numChars, str)
  }
}
