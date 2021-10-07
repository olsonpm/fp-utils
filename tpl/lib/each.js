{{{import 'assertArgIsType' '../internal'}}}
{{{import 'getFn' '../internal'}}}

const each = fn => {
  assertArgIsType(fn, 'fn', 'function', 'each')

  return container => {
    const typeFn = getFn(typeToFn, container, 'each')
    return typeFn(container, fn)
  }
}

const typeToFn = {
  arguments: each_arguments,
  array: each_forEachAble,
  map: each_forEachAble,
  object: each_object,
  set: each_forEachAble,
  typedArray: each_forEachAble,
}

function each_arguments(args, fn) {
  for (let i = 0; i < args.length; i += 1) {
    fn(args[i], i, args)
  }

  return args
}

function each_forEachAble(coll, fn) {
  coll.forEach(fn)

  return coll
}

function each_object(obj, fn) {
  for (const [key, val] of Object.entries(obj)) {
    fn(val, key, obj)
  }

  return obj
}

{{{export}}}
