{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} prefix => {
  assertArgIsType(prefix, 'prefix', 'string', 'startsWith')

  return str => {
    assertArgIsType(str, 'str', 'string', 'startsWith')

    return str.startsWith(prefix)
  }
}
