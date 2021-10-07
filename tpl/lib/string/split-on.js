{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} separator => {
  assertArgIsType(separator, 'separator', 'string', 'splitOn')

  return str => {
    assertArgIsType(str, 'str', 'string', 'splitOn')

    return str.split(separator)
  }
}
