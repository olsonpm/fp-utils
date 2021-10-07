import getFn from '../internal/get-fn.mjs'
import isLadenTypeToFn from '../internal/is-laden-type-to-fn.mjs'

export default something => {
  const fn = getFn(isLadenTypeToFn, something, 'isEmpty')
  return !fn(something)
}
