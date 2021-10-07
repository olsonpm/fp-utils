const assertArgIsType = require('../internal/assert-arg-is-type.cjs')
const getValueAt = require('../internal/get-value-at.cjs')

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

module.exports = getValueAtPath
