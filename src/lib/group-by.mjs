import assertArgIsType from '../internal/assert-arg-is-type.mjs'
import getFn from '../internal/get-fn.mjs'

const groupBy = fn => {
  assertArgIsType(fn, 'fn', 'function', 'groupBy')

  return something => {
    const typeFn = getFn(typeToFn, something, 'groupBy')
    return typeFn(something, fn)
  }
}

const typeToFn = {
  arguments: groupBy_length,
  array: groupBy_length,
  map: groupBy_entries,
  object: groupBy_object,
  set: groupBy_entries,
  typedArray: groupBy_length,
}

function groupByVal(fn, coll, key, val, result) {
  const group = fn(val, key, coll)

  if (!result[group]) result[group] = [val]
  else result[group].push(val)
}

function groupBy_length(coll, fn) {
  const result = {}

  for (let i = 0; i < coll.length; i += 1) {
    groupByVal(fn, coll, i, coll[i], result)
  }

  return result
}

function groupBy_entries(coll, fn) {
  const result = {}

  for (const [key, val] of coll.entries()) {
    groupByVal(fn, coll, key, val, result)
  }

  return result
}

function groupBy_object(obj, fn) {
  const result = {}

  for (const [key, val] of Object.entries(obj)) {
    groupByVal(fn, obj, key, val, result)
  }

  return result
}

export default groupBy
