const getFn = require('../internal/get-fn.cjs')
const isLadenTypeToFn = require('../internal/is-laden-type-to-fn.cjs')

module.exports = something => {
  const fn = getFn(isLadenTypeToFn, something, 'isEmpty')
  return !fn(something)
}
