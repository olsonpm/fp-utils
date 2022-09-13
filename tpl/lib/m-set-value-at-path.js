{{{import 'assertArgIsType' '../internal'}}}
{{{import 'getValueAt' '../internal'}}}
{{{import 'mSetValueAt' '../internal'}}}

const mSetValueAtPath = (path, val) => {
  assertArgIsType(path, 'path', 'array', 'mSetValueAtPath')
  if (!path.length) throw new Error(`argument 'path' from the utility 'mSetValueAtPath' requires a non-empty array`)

  return anything => {
    const obj = path.slice(0, -1).reduce(
      (result, key) => {
        let innerObj = getValueAt(key, result)
        if (innerObj === undefined) {
          innerObj = {}
          mSetValueAt(result, key, innerObj)
        }
        return innerObj
      },
      anything
    )

    const lastKey = path[path.length - 1]
    mSetValueAt(obj, lastKey, val)
    return anything
  }
}

{{{export}}}
