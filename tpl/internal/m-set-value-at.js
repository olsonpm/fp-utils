{{{import 'assertArgIsOneOfType'}}}
{{{import 'getFn'}}}

{{{exportInline}}} (container, key, val, isMSetValueAt) => {
  const typeFn = getFn(typeToFn, container, 'mSetValueAt', { defaultFn: typeToFn.object })
  return typeFn(container, key, val, isMSetValueAt)
}

const typeToFn = {
  array: mSetValueAt_array,
  map: mSetValueAt_map,
  object: mSetValueAt_object,
}

function mSetValueAt_array(arr, key, val, isMSetValueAt) {
  if (isMSetValueAt)
    assertArgIsOneOfType(key, 'key', ['string', 'number'], 'mSetValueAt')

  arr[key] = val
  return arr
}

function mSetValueAt_map(aMap, key, val, isMSetValueAt) {
  return aMap.set(key, val)
}

function mSetValueAt_object(obj, key, val, isMSetValueAt) {
  if (isMSetValueAt)
    assertArgIsOneOfType(key, 'key', ['string', 'number'], 'mSetValueAt')

  obj[key] = val
  return obj
}
