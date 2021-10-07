import assertArgIsType from '../internal/assert-arg-is-type.mjs'
import getFn from '../internal/get-fn.mjs'

const keepWhen = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'keepWhen')

  return something => {
    const fn = getFn(typeToFn, something, 'keepWhen')
    return fn(something, predicate)
  }
}

const typeToFn = {
  array: keepWhen_filter,
  map: keepWhen_map,
  object: keepWhen_object,
  set: keepWhen_set,
  typedArray: keepWhen_filter,
}

function keepWhen_filter(coll, predicate) {
  return coll.filter(predicate)
}

function keepWhen_map(aMap, predicate) {
  const result = new Map()

  for (const [key, val] of aMap.entries()) {
    if (predicate(val, key, aMap)) result.set(key, val)
  }

  return result
}

function keepWhen_object(obj, predicate) {
  const result = {}

  for (const [key, val] of Object.entries(obj)) {
    if (predicate(val, key, obj)) result[key] = val
  }

  return result
}

function keepWhen_set(aSet, predicate) {
  const result = new Set()

  for (const val of aSet) {
    if (predicate(val, val, aSet)) result.add(val)
  }

  return result
}

export default keepWhen
