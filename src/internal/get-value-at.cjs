const assertArgIsOneOfType = require('../internal/assert-arg-is-one-of-type.cjs')
const getType = require('./get-type.cjs')

module.exports = (key, something, isGetValueAt) => {
  if (getType(something) === 'map')
    return something.get(key)

  if (isGetValueAt)
    assertArgIsOneOfType(key, 'key', ['string', 'number'], 'getValueAt')

  return something[key]
}
