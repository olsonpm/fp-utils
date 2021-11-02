const universalEol = require('universal-eol')
const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')
const getFirstNLines = require('../../internal/string/get-first-n-lines.cjs')

const { EOL } = universalEol

module.exports = numLines => {
  if (!Number.isInteger(numLines))
    throw new Error('numLines must be an integer')

  return str => {
    assertArgIsType(str, 'str', 'string', 'truncateToNLines')

    const { lines, moreLinesExist } = getFirstNLines(numLines)(str)
    if (moreLinesExist) {
      if (numLines === 1) lines[0] += '...'
      else lines.push('...')
    }

    return lines.join(EOL)
  }
}
