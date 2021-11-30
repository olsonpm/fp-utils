const truncateToNChars = require('../internal/string/truncate-to-n-chars.cjs')
const { containsAllTypeToFn, getFn, isIterable } = require('../internal/index.cjs')

module.exports = vals => {
  if (!isIterable(vals)) {
    const strVals = truncateToNChars(10, '' + vals)

    throw new Error(
      'vals must be iterable'
      + `\n  vals: ${strVals}`
    )
  }

  return something => {
    const fn = getFn(containsAllTypeToFn, something, 'containsAll')
    return fn(something, vals)
  }
}
