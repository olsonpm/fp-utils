{{{import 'getFn' '../internal'}}}

const getFirst = something => {
  const fn = getFn(typeToFn, something, 'getFirst')
  return fn(something)
}

const typeToFn = {
  arguments: getFirst_hasLength,
  array: getFirst_hasLength,
  string: getFirst_hasLength,
  typedArray: getFirst_hasLength,
}

function getFirst_hasLength(something) {
  return something[0]
}

{{{export}}}
