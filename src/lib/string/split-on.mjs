import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default separator => {
  assertArgIsType(separator, 'separator', 'string', 'splitOn')

  return str => {
    assertArgIsType(str, 'str', 'string', 'splitOn')

    return str.split(separator)
  }
}
