{{{importNamed 'assertArgIsOneOfType, getFn' '../internal/index'}}}

/**
 * this is a naive implementation as it iterates the entire collection.
 * we can optimize as-needed
 */

const pick = keys => {
  assertArgIsOneOfType(keys, 'keys', ['array', 'set'], 'pick')
  const setOfKeys = new Set(keys)

  return something => {
    const fn = getFn(typeToFn, something, 'pick')
    return fn(something, setOfKeys)
  }
}

const typeToFn = {
  array: pick_filterAble,
  map: pick_map,
  object: pick_object,
  set: pick_set,
  typedArray: pick_filterAble,
}

function pick_filterAble(arr, keys) {
  return arr.filter((_el, i) => keys.has(i))
}

function pick_map(aMap, keys) {
  const result = new Map()

  for (const [k, val] of aMap) {
    if (keys.has(k)) result.set(k, val)
  }

  return result
}

function pick_object(obj, keys) {
  const result = {}

  for (const k of Object.keys(obj)) {
    if (keys.has(k)) result[k] = obj[k]
  }

  return result
}

// treating a set like an object with exact same key/val
function pick_set(aSet, keys) {
  const result = new Set()

  for (const k of aSet) {
    if (keys.has(k)) result.add(k)
  }

  return result
}

{{{export}}}
