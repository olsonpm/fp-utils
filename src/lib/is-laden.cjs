const getFn = require('../internal/get-fn.cjs')
const isLadenTypeToFn = require('../internal/is-laden-type-to-fn.cjs')

const isLaden = something => {
  const fn = getFn(isLadenTypeToFn, something, 'isLaden')
  return fn(something)
}

module.exports = isLaden
