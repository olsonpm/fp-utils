{{{import 'getFn' '../internal'}}}

const getLast = something => {
  const fn = getFn(typeToFn, something, 'getLast')
  return fn(something)
}

const typeToFn = {
  arguments: getLast_hasLength,
  array: getLast_hasLength,
  string: getLast_hasLength,
  typedArray: getLast_hasLength,
}

function getLast_hasLength(something) {
  return something[something.length - 1]
}

{{{export}}}
