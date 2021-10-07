{{{import 'getFn' '../internal'}}}
{{{import 'isLadenTypeToFn' '../internal'}}}

{{{exportInline}}} something => {
  const fn = getFn(isLadenTypeToFn, something, 'isEmpty')
  return !fn(something)
}
