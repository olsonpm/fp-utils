{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} appendedValues => {
  assertArgIsType(appendedValues, 'appendedValues', 'array', 'appendAll')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'appendAll')

    return anArray.concat(appendedValues)
  }
}
