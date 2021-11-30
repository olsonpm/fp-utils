import truncateToNChars from '../../internal/string/truncate-to-n-chars.mjs'
import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default numChars => {
  if (!Number.isInteger(numChars))
    throw new Error('numChars must be an integer')

  return str => {
    assertArgIsType(str, 'str', 'string', 'truncateToNChars')

    return truncateToNChars(numChars, str)
  }
}
