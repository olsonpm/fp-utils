const assertArgIsType = require('../internal/assert-arg-is-type.cjs')
const getFn = require('../internal/get-fn.cjs')

const takeWhile = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'takeWhile')

  return something => {
    const fn = getFn(typeToFn, something, 'takeWhile')
    return fn(something, predicate)
  }
}

const typeToFn = {
  array: takeWhile_array,
  typedArray: takeWhile_array,
}

function takeWhile_array(arr, predicate) {
  let i = 0

  while (predicate(arr[i], i, arr)) {
    i += 1
  }

  return arr.slice(0, i)
}

module.exports = takeWhile
