{{{import 'assertArgIsType' '../internal'}}}
{{{import 'getValueAt' '../internal'}}}

const getValueAtPath = path => {
  assertArgIsType(path, 'path', 'array', 'getValueAtPath')

  return value => {
    if (!path.length) return value

    for (const key of path) {
      {{!
        it is possible for a dev to pass a bad key here inside path.  But if we
        were to throw an error in that case, there is no good way I can think of
        to communicate it.
      }}
      value = getValueAt(key, value)

      if (value === undefined) return
    }

    return value
  }
}

{{{export}}}
