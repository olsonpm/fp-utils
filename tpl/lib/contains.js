{{{import 'containsTypeToFn' '../internal'}}}
{{{import 'getFn' '../internal'}}}

{{{exportInline}}} val => something => {
  const fn = getFn(containsTypeToFn, something, 'contains')
  return fn(something, val)
}
