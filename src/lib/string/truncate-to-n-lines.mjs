import universalEol from 'universal-eol'
import assertArgIsType from '../../internal/assert-arg-is-type.mjs'
import getFirstNLines from '../../internal/string/get-first-n-lines.mjs'

const { EOL } = universalEol

export default numberOfLines => {
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
