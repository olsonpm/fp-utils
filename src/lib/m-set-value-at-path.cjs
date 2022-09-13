const assertArgIsType = require('../internal/assert-arg-is-type.cjs')
const getValueAt = require('../internal/get-value-at.cjs')
const mSetValueAt = require('../internal/m-set-value-at.cjs')

const mSetValueAtPath = (path, val) => {
  assertArgIsType(path, 'path', 'array', 'mSetValueAtPath')
  if (!path.length) throw new Error(`argument 'path' from the utility 'mSetValueAtPath' requires a non-empty array`)

  return anything => {
    const obj = path.slice(0, -1).reduce(
      (result, key) => {
        let innerObj = getValueAt(result, key)
        if (innerObj === undefined) {
          innerObj = {}
          mSetValueAt(result, key, innerObj)
        }
        return innerObj
      },
      anything
    )

    const lastKey = path[path.length - 1]
    mSetValueAt(obj, lastKey, val)
    return anything
  }
}

module.exports = mSetValueAtPath
