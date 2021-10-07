import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default date1 => {
  assertArgIsType(date1, 'date1', 'date', 'isBefore')

  return date2 => {
    assertArgIsType(date1, 'date2', 'date', 'isBefore')

    return date2 < date1
  }
}
