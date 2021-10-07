import getFn from '../internal/get-fn.mjs'
import assertArgIsType from '../internal/assert-arg-is-type.mjs'

const pare = (fn, initial) => {
  assertArgIsType(fn, 'fn', 'function', 'pare')

  return something => {
    const typeFn = getFn(typeToFn, something, 'pare')
    return typeFn(something, fn, initial)
  }
}

const typeToFn = {
  arguments: pare_arguments,
  array: pare_reduce,
  map: pare_entries,
  object: pare_object,
  set: pare_entries,
  typedArray: pare_reduce,
}

function pare_arguments(args, fn, initial) {
  let result = initial

  for (let i = 0; i < args.length; i += 1) {
    result = fn(result, args[i], i, args)
  }

  return result
}

function pare_entries(coll, fn, initial) {
  let result = initial

  for (const [key, val] of coll.entries()) {
    result = fn(result, val, key, coll)
  }

  return result
}

function pare_object(obj, fn, initial) {
  let result = initial

  for (const [key, val] of Object.entries(obj)) {
    result = fn(result, val, key, obj)
  }

  return result
}

function pare_reduce(coll, fn, initial) {
  return coll.reduce(fn, initial)
}

export default pare
