{{{import 'assertArgIsType' '../internal'}}}

{{{exportInline}}} (val, fnArray) => {
  assertArgIsType(fnArray, 'fnArray', 'array', 'passThrough')

  return fnArray.reduce((result, fn) => fn(result), val)
}
