import assertArgIsType from '../internal/assert-arg-is-type.mjs'
import getFn from '../internal/get-fn.mjs'

const find = predicate => {
  assertArgIsType(predicate, 'predicate', 'function', 'find')

  return something => {
    const fn = getFn(typeToMapper, something, 'find')

    return fn(something, predicate)
  }
}

const typeToMapper = {
  array: find_findAble,
  typedArray: find_findAble,
}

function find_findAble(coll, predicate) {
  return coll.find(predicate)
}

export default find
