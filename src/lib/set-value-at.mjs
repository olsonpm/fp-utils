import assertArgIsOneOfType from '../internal/assert-arg-is-one-of-type.mjs'
import getFn from '../internal/get-fn.mjs'

const setValueAt = (key, val) => container => {
  const typeFn = getFn(typeToFn, container, 'setValueAt')
  return typeFn(container, key, val)
}

const typeToFn = {
  array: setValueAt_array,
  map: setValueAt_map,
  object: setValueAt_object,
}

function setValueAt_array(arr, key, val) {
  assertArgIsOneOfType(key, 'key', ['string', 'number'], 'setValueAt')

  const result = arr.slice()

  result[key] = val

  return result
}

function setValueAt_map(aMap, key, val) {
  const result = new Map(aMap)
  return result.set(key, val)
}

function setValueAt_object(obj, key, val) {
  assertArgIsOneOfType(key, 'key', ['string', 'number'], 'setValueAt')

  return Object.assign({}, obj, { [key]: val })
}

export default setValueAt
