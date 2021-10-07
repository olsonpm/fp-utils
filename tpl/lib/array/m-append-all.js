{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} appendedValues => {
  assertArgIsType(appendedValues, 'appendedValues', 'array', 'mAppendAll')

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'mAppendAll')

    anArray.push(...appendedValues)
    return anArray
  }
}
