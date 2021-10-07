import assertArgIsOneOfType from '../internal/assert-arg-is-one-of-type.mjs'
import getType from './get-type.mjs'

export default (key, something, isGetValueAt) => {
  if (getType(something) === 'map')
    return something.get(key)

  if (isGetValueAt)
    assertArgIsOneOfType(key, 'key', ['string', 'number'], 'getValueAt')

  return something[key]
}
