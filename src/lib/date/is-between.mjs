import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default (date1, date2) => {
  assertArgIsType(date1, 'date1', 'date', 'isBetween')
  assertArgIsType(date2, 'date2', 'date', 'isBetween')

  return date3 => {
    assertArgIsType(date3, 'date3', 'date', 'isBetween')

    const someTime = date3.getTime()

    return someTime === date1.getTime()
      || someTime === date2.getTime()
      || ((date3 > date1) === (date3 < date2))
  }
}
