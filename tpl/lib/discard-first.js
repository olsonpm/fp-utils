{{{import 'getFn' '../internal'}}}

const discardFirst = n => {
  if (!(Number.isInteger(n) && n >= 0)) {
    throw new Error(
      'n must be an integer greater than or equal to zero' + `\n  n: ${n}`
    )
  }

  return something => {
    const fn = getFn(typeToFn, something, 'discardFirst')
    return fn(something, n)
  }
}

const typeToFn = {
  array: discardFirst_hasSlice,
  string: discardFirst_hasSlice,
  typedArray: discardFirst_hasSlice,
}

function discardFirst_hasSlice(coll, n) {
  return coll.slice(n)
}

{{{export}}}
