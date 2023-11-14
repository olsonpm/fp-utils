import { assertArgIsOneOfType, getFn } from '../internal/index.mjs'

/**
 * this is a naive implementation as it iterates the entire collection.
 * we can optimize as-needed
 */

const omit = keys => {
  assertArgIsOneOfType(keys, 'keys', ['array', 'set'], 'omit')
  const setOfKeys = new Set(keys)

  return something => {
    const fn = getFn(typeToFn, something, 'omit')
    return fn(something, setOfKeys)
  }
}

const typeToFn = {
  array: omit_filterAble,
  map: omit_map,
  object: omit_object,
  set: omit_set,
  typedArray: omit_filterAble,
}

function omit_filterAble(arr, keys) {
  return arr.filter((_el, i) => !keys.has(i))
}

function omit_map(aMap, keys) {
  const result = new Map()

  for (const [k, val] of aMap) {
    if (!keys.has(k)) result.set(k, val)
  }

  return result
}

function omit_object(obj, keys) {
  const result = {}

  for (const k of Object.keys(obj)) {
    if (!keys.has(k)) result[k] = obj[k]
  }

  return result
}

// treating a set like an object with exact same key/val
function omit_set(aSet, keys) {
  const result = new Set()

  for (const k of aSet) {
    if (!keys.has(k)) result.add(k)
  }

  return result
}

export default omit
