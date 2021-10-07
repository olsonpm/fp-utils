import getFn from '../internal/get-fn.mjs'
import getType from '../internal/get-type.mjs'

const mapValues = mapperFn => {
  const type = getType(mapperFn)
  if (type !== 'function')
    throw new Error(`mapValues requires mapperFn to be of type 'function'`)

  return something => {
    const fn = getFn(typeToFn, something, 'mapValues')
    return fn(something, mapperFn)
  }
}

const typeToFn = {
  array: mapValues_mapAble,
  map: mapValues_map,
  object: mapValues_object,
  set: mapValues_set,
  typedArray: mapValues_mapAble,
}

function mapValues_mapAble(coll, mapperFn) {
  return coll.map(mapperFn)
}

function mapValues_map(aMap, mapperFn) {
  const result = new Map()

  for (const [key, val] of aMap) result.set(key, mapperFn(val, key, aMap))

  return result
}

function mapValues_object(obj, mapperFn) {
  const result = {}

  for (const [key, val] of Object.entries(obj)) {
    result[key] = mapperFn(val, key, obj)
  }

  return result
}

function mapValues_set(aSet, mapperFn) {
  const result = new Set()

  for (const el of aSet) result.add(mapperFn(el, el, aSet))

  return result
}

export default mapValues
