import truncateToNChars from '../internal/string/truncate-to-n-chars.mjs'
import { containsAllTypeToFn, getFn, isIterable } from '../internal/index.mjs'

export default vals => {
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
