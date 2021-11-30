{{{import 'truncateToNChars' '../../internal/string'}}}
{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} numChars => {
  if (!Number.isInteger(numChars))
    throw new Error('numChars must be an integer')

  return str => {
    assertArgIsType(str, 'str', 'string', 'truncateToNChars')

    return truncateToNChars(numChars, str)
  }
}
