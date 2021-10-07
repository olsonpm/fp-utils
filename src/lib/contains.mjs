import containsTypeToFn from '../internal/contains-type-to-fn.mjs'
import getFn from '../internal/get-fn.mjs'

export default val => something => {
  const fn = getFn(containsTypeToFn, something, 'containedIn')
  return fn(something, val)
}
