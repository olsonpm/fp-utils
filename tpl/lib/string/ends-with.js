{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} end => {
  assertArgIsType(end, 'end', 'string', 'startsWith')

  return str => {
    assertArgIsType(str, 'str', 'string', 'startsWith')

    return str.endsWith(end)
  }
}
