{{{importDep 'universalEol'}}}
{{{import 'assertArgIsType' '../../internal'}}}
{{{import 'getFirstNLines' '../../internal/string'}}}

const { EOL } = universalEol

{{{exportInline}}} numberOfLines => {
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
