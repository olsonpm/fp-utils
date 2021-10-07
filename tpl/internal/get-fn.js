{{{import 'getType'}}}

{{{exportInline}}} (typeToFn, something, utilName) => {
  const type = getType(something)

  let fn = typeToFn[type]

{{!
  'typedArray' is the only group that will be used in this library.  If we
  allowed other groups then that would prove problematic when they overlap e.g.
  if typeToFn declared both 'hasLength' and 'typedArray' then this library would
  have to decide which one Int8Array should point to which cannot be done
  intuitively.  I'm using typedArray since it will avoid a ton of repeated
  type declarations
}}
  if (!fn && type !== 'array' && type.endsWith('array'))
    fn = typeToFn.typedArray

  if (!fn)
    throw new Error(`${utilName} doesn't support the data type '${type}'`)

  return fn
}

