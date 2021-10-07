import assertArgIsType from '../internal/assert-arg-is-type.mjs'
import getValueAt from '../internal/get-value-at.mjs'

const getValueAtPath = path => {
  assertArgIsType(path, 'path', 'array', 'getValueAtPath')

  return value => {
    if (!path.length) return value

    for (const key of path) {
      value = getValueAt(key, value)

      if (value === undefined) return
    }

    return value
  }
}

export default getValueAtPath
