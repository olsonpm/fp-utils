import getFn from '../internal/get-fn.mjs'
import isLadenTypeToFn from '../internal/is-laden-type-to-fn.mjs'

const isLaden = something => {
  const fn = getFn(isLadenTypeToFn, something, 'isLaden')
  return fn(something)
}

export default isLaden
