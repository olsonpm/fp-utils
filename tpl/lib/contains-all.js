{{{import 'truncateToNChars' '../internal/string'}}}
{{{importNamed 'containsAllTypeToFn, getFn, isIterable' '../internal/index'}}}

{{{exportInline}}} vals => {
  if (!isIterable(vals)) {
    const strVals = truncateToNChars(10, '' + vals)

    throw new Error(
      'vals must be iterable'
      + `\n  vals: ${strVals}`
    )
  }

  return something => {
    const fn = getFn(containsAllTypeToFn, something, 'containsAll')
    return fn(something, vals)
  }
}
