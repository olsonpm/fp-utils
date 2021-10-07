{{{import 'getFn' '../internal'}}}

const getSize = something => {
  const fn = getFn(typeToMapper, something, 'getSize')
  return fn(something)
}

const typeToMapper = {
  arguments: getSize_hasLength,
  array: getSize_hasLength,
  map: getSize_hasSize,
  object: getSize_object,
  set: getSize_hasSize,
  string: getSize_hasLength,
  typedArray: getSize_hasLength,
}

function getSize_hasSize(something) {
  return something.size
}

function getSize_hasLength(something) {
  return something.length
}

function getSize_object(obj) {
  return Object.keys(obj).length
}

{{{export}}}
