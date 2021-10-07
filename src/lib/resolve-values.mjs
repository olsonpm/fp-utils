import getFn from '../internal/get-fn.mjs'

const resolveValues = something => {
  const typeFn = getFn(typeToFn, something, 'resolveValues')
  return typeFn(something)
}

const typeToFn = {
  array: setValueAt_promiseAll,
  map: setValueAt_map,
  object: setValueAt_object,
  set: setValueAt_promiseAll,
}

function setValueAt_promiseAll(arr) {
  return Promise.all(arr)
}

async function setValueAt_map(aMap) {
  const keys = Array.from(aMap.keys()),
    values = await Promise.all(aMap.values()),
    result = new Map()

  for (let i = 0; i < values.length; i += 1)
    result.set(keys[i], values[i])

  return result
}

async function setValueAt_object(obj) {
  const keys = Object.keys(obj),
    values = await Promise.all(Object.values(obj)),
    result = {}

  for (let i = 0; i < values.length; i += 1)
    result[keys[i]] = values[i]

  return result
}

export default resolveValues
