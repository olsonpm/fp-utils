{{{importDep 'universalEol'}}}
{{{import 'assertArgIsType' '../../internal'}}}
{{{import 'getFirstNLines' '../../internal/string'}}}

const { EOL } = universalEol

{{{exportInline}}} numLines => {
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
