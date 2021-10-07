{{{import 'assertArgIsType' '../internal'}}}
{{{import 'getFn' '../internal'}}}

const join = separator => {
  assertArgIsType(separator, 'separator', 'string', 'join')

  return something => {
    const fn = getFn(typeToMapper, something, 'join')

    return fn(something, separator)
  }
}

const typeToMapper = {
  array: join_joinAble,
  typedArray: join_joinAble,
}

function join_joinAble(coll, separator) {
  return coll.join(separator)
}

{{{export}}}
