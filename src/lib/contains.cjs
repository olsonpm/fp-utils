const containsTypeToFn = require('../internal/contains-type-to-fn.cjs')
const getFn = require('../internal/get-fn.cjs')

module.exports = val => something => {
  const fn = getFn(containsTypeToFn, something, 'containedIn')
  return fn(something, val)
}
