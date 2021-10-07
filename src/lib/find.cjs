const assertArgIsType = require('../internal/assert-arg-is-type.cjs')
const getFn = require('../internal/get-fn.cjs')

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

module.exports = find
