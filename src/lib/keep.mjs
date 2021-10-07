import assertArgIsOneOfType from '../internal/assert-arg-is-one-of-type.mjs'
import getFn from '../internal/get-fn.mjs'

const keep = values => {
  assertArgIsOneOfType(values, 'values', ['array', 'set'], 'keep')
  values = new Set(values)

  return something => {
    const fn = getFn(typeToFn, something, 'keep')
    return fn(something, values)
  }
}

const typeToFn = {
  array: keep_array,
  set: keep_set,
}

function keep_array(arr, values) {
  const result = []

  for (const el of arr) {
    if (values.has(el)) result.push(el)
  }

  return result
}

function keep_set(aSet, values) {
  const result = new Set()

  for (const el of aSet) {
    if (values.has(el)) result.add(el)
  }

  return result
}

export default keep
