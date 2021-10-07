import assertArgIsType from '../../internal/assert-arg-is-type.mjs'

export default prefix => {
  assertArgIsType(prefix, 'prefix', 'string', 'startsWith')

  return str => {
    assertArgIsType(str, 'str', 'string', 'startsWith')

    return str.startsWith(prefix)
  }
}
