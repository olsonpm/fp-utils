{{{import 'getType'}}}

{{{exportInline}}} (arg, name, expectedType, utilName) => {
  const type = getType(arg)

  if (type !== expectedType)
    throw new Error(`argument ${name} from the utility ${utilName} expected a type of '${expectedType}' but got '${type}'`)
}
