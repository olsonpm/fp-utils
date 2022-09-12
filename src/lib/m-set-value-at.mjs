import assertArgIsOneOfType from '../internal/assert-arg-is-one-of-type.mjs'
import getFn from '../internal/get-fn.mjs'

const mSetValueAt = (container, key, val) => {
  const typeFn = getFn(typeToFn, container, 'mSetValueAt')
  return typeFn(container, key, val)
}

const typeToFn = {
  array: mSetValueAt_array,
  map: mSetValueAt_map,
  object: mSetValueAt_object,
}

function mSetValueAt_array(arr, key, val) {
  assertArgIsOneOfType(key, 'key', ['string', 'number'], 'mSetValueAt')

  arr[key] = val
  return arr
}

function mSetValueAt_map(aMap, key, val) {
  return aMap.set(key, val)
}

function mSetValueAt_object(obj, key, val) {
  assertArgIsOneOfType(key, 'key', ['string', 'number'], 'mSetValueAt')

  return Object.assign(obj, { [key]: val })
}

export default mSetValueAt
