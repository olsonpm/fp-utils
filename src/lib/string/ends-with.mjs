import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default end => {
  assertArgIsType(end, 'end', 'string', 'startsWith')

  return str => {
    assertArgIsType(str, 'str', 'string', 'startsWith')

    return str.endsWith(end)
  }
}
