{{{import 'containsTypeToFn' '../internal'}}}
{{{import 'getFn' '../internal'}}}

{{{exportInline}}} something => val => {
  const fn = getFn(containsTypeToFn, something, 'containedIn')
  return fn(something, val)
}
