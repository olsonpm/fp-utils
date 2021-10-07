const getType = require('../internal/get-type.cjs')

const containsTypeToFn = {
  arguments: contains_arguments,
  array: contains_includes,
  map: contains_map,
  object: contains_object,
  set: contains_set,
  string: contains_string,
  typedArray: contains_includes,
}

function contains_arguments(args, val) {
  for (let i = 0; i < args.length; i += 1) {
    if (val === args[i]) return true
  }

  return false
}

function contains_includes(arr, val) {
  return arr.includes(val)
}

function contains_map(aMap, val) {
  for (const v of aMap.values()) {
    if (v === val) return true
  }

  return false
}

function contains_object(obj, val) {
  return Object.values(obj).includes(val)
}

function contains_set(aSet, val) {
  return aSet.has(val)
}

function contains_string(str, val) {
  const valType = getType(val)

  if (valType !== 'string')
    throw new Error(`'val' passed is type ${valType}.  A string is required`)

  return str.includes(val)
}

module.exports = containsTypeToFn
