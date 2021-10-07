const containsTypeToFn = require('../internal/contains-type-to-fn.cjs')
const getFn = require('../internal/get-fn.cjs')

module.exports = something => val => {
  const fn = getFn(containsTypeToFn, something, 'containedIn')
  return fn(something, val)
}
