{{{import 'assertArgIsType' '../../internal'}}}

{{{exportInline}}} el => anArray => {
  assertArgIsType(anArray, 'anArray', 'array', 'mAppend')

  anArray.push(el)
  return anArray
}
