{{{import 'getFn' '../internal'}}}
{{{import 'isLadenTypeToFn' '../internal'}}}

const isLaden = something => {
  const fn = getFn(isLadenTypeToFn, something, 'isLaden')
  return fn(something)
}

{{{export}}}
