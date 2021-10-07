{{{import 'assertArgIsType' '../internal'}}}
{{{import 'getFn' '../internal'}}}

const any = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'any')

  return something => {
    const fn = getFn(typeToFn, something, 'any')
    return fn(something, predicate)
  }
}

const typeToFn = {
  arguments: any_arguments,
  array: any_someAble,
  map: any_entries,
  object: any_object,
  set: any_entries,
  typedArray: any_someAble,
}

function any_arguments(args, predicate) {
  for (let i = 0; i < args.length; i += 1) {
    if (predicate(args[i], i, args)) return true
  }

  return false
}

function any_entries(coll, predicate) {
  for (const [key, val] of coll.entries()) {
    if (predicate(val, key, coll)) return true
  }

  return false
}

function any_object(obj, predicate) {
  for (const [key, val] of Object.entries(obj)) {
    if (predicate(val, key, obj)) return true
  }

  return false
}

function any_someAble(coll, predicate) {
  return coll.some(predicate)
}

{{{export}}}
