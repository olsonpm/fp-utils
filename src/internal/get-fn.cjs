const getType = require('./get-type.cjs')

module.exports = (typeToFn, something, utilName) => {
  const type = getType(something)

  let fn = typeToFn[type]

  if (!fn && type !== 'array' && type.endsWith('array'))
    fn = typeToFn.typedArray

  if (!fn)
    throw new Error(`${utilName} doesn't support the data type '${type}'`)

  return fn
}

