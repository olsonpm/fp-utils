{{{import 'getFn' '../internal'}}}
{{{import 'getType' '../internal'}}}

const invert = something => {
  const fn = getFn(typeToFn, something, 'invert')
  return fn(something)
}

const typeToFn = {
  map: invert_map,
  object: invert_obj,
}

function invert_map(coll) {
  const res = new Map()
  for (const [k, v] of coll.entries()) {
    res.set(v, k)
  }
  return res
}

function invert_obj(coll) {
  const res = {}

  for (const [k, v] of Object.entries(coll)) res[v] = k

  return res
}

{{{export}}}
