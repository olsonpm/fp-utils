{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} wrapper => {
  assertArgIsType(wrapper, 'wrapper', 'string', 'wrapIn')

  return str => {
    assertArgIsType(str, 'str', 'string', 'wrapIn')
    return wrapper + str + wrapper
  }
}
