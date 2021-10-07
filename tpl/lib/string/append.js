{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} right => {
  assertArgIsType(right, 'right', 'string', 'append')

  return left => {
    assertArgIsType(left, 'left', 'string', 'append')

    return left + right
  }
}
