import universalEol from 'universal-eol'
import assertArgIsType from '../../internal/assert-arg-is-type.mjs'
import getFirstNLines from '../../internal/string/get-first-n-lines.mjs'

const { EOL } = universalEol

export default numLines => {
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
