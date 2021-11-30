import getType from './get-type.mjs'
import truncateToNChars from './string/truncate-to-n-chars.mjs'

const containsAllTypeToFn = {
  arguments: containsAll_arguments,
  array: containsAll_includes,
  map: containsAll_map,
  object: containsAll_object,
  set: containsAll_set,
  string: containsAll_string,
  typedArray: containsAll_includes,
}

function containsAll_arguments(args, vals) {
  return containsAll_set(new Set(args), vals)
}

function containsAll_includes(arr, vals) {
  return containsAll_set(new Set(arr), vals)
}

function containsAll_map(aMap, vals) {
  return containsAll_set(new Set(aMap.values()), vals)
}

function containsAll_object(obj, vals) {
  return containsAll_set(new Set(Object.values(obj)), vals)
}

function containsAll_set(aSet, vals) {
  for (const aVal of vals) {
    if (!aSet.has(aVal)) return false
  }
  return true
}

function containsAll_string(str, vals) {
  if (getType(vals) === 'string') {
    throw new Error(
      'vals cannot be a string, it must be a container of strings e.g. an array'
      + '\nthis avoids ambiguity between testing each string vs'
      + 'each character'
      + '\n\nif you want to test for each character then call'
      + " `containsAll(str.split(''))(someStr)`"
    )
  }

  let badVal, valType
  let valIdx = 0

  for (const aVal of vals) {
    valType = getType(aVal)
    if (valType !== 'string') {
      badVal = aVal
      break
    }
    valIdx += 1
  }

  if (badVal) {
    const truncatedVal = truncateToNChars(10, '' + badVal)

    throw new Error(
      'at least one value passed is not type string.'
      + `\n  val: ${truncatedVal}`
      + `\n  type: ${valType}`
      + `\n  idx: ${valIdx}`
    )
  }

  for (const aVal of vals) {
    if (!str.includes(aVal)) return false
  }

  return true
}

export default containsAllTypeToFn
