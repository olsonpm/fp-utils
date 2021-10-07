import getType from './get-type.mjs'

export default (arg, name, expectedTypes, utilName) => {
  const type = getType(arg)

  if (!expectedTypes.includes(type))
    throw new Error(
      `argument ${name} from the utility ${utilName} was an unexpected type '${type}'`
      + `\ntypes allowed: ${expectedTypes.join(', ')}`
    )
}
