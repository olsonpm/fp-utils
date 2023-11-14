import { assertArgIsOneOfType, getFn } from '../internal/index.mjs'

/**
 * this is a naive implementation as it iterates the entire collection.
 * we can optimize as-needed
 */

const discard = vals => {
  assertArgIsOneOfType(vals, 'vals', ['array', 'set'], 'discard')
  const setOfVals = new Set(vals)

  return something => {
    const fn = getFn(typeToFn, something, 'discard')
    return fn(something, setOfVals)
  }
}

const typeToFn = {
  array: discard_filterAble,
  map: discard_map,
  object: discard_object,
  set: discard_set,
  typedArray: discard_filterAble,
}

function discard_filterAble(arr, vals) {
  return arr.filter(v => !vals.has(v))
}

function discard_map(aMap, vals) {
  const result = new Map()

  for (const [k, v] of aMap) {
    if (!vals.has(v)) result.set(k, v)
  }

  return result
}

function discard_object(obj, vals) {
  const result = {}

  for (const [k, v] of Object.entries(obj)) {
    if (!vals.has(v)) result[k] = v
  }

  return result
}

// treating a set like an object with exact same key/val since that's how
// Set.prototype.entries works
function discard_set(aSet, vals) {
  const result = new Set()

  for (const v of aSet) {
    if (!vals.has(v)) result.add(v)
  }

  return result
}

export default discard
