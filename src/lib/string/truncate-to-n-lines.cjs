const universalEol = require('universal-eol')
const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')
const getFirstNLines = require('../../internal/string/get-first-n-lines.cjs')

const { EOL } = universalEol

module.exports = numberOfLines => {
  if (!Number.isInteger(numberOfLines))
    throw new Error('numberOfLines must be an integer')

  return str => {
    assertArgIsType(str, 'str', 'string', 'truncateToNLines')

    const { lines, moreLinesExist } = getFirstNLines(numberOfLines)(str)
    if (moreLinesExist) {
      if (numberOfLines === 1) lines[0] += '...'
      else lines.push('...')
    }

    return lines.join(EOL)
  }
}
