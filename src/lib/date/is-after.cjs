const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = date1 => {
  assertArgIsType(date1, 'date1', 'date', 'isAfter')

  return date2 => {
    assertArgIsType(date2, 'date2', 'date', 'is-after')

    return date2 > date1
  }
}
