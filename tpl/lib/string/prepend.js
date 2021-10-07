{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} left => {
  assertArgIsType(left, 'left', 'string', 'append')

  return right => {
    assertArgIsType(right, 'right', 'string', 'append')

    return left + right
  }
}
