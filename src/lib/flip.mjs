import getFn from '../internal/get-fn.mjs'

const flip = something => {
  const fn = getFn(typeToMapper, something, 'flip')
  return fn(something)
}

const typeToMapper = {
  array: flip_sliceReverse,
  typedArray: flip_sliceReverse,
}

function flip_sliceReverse(arr) {
  return arr.slice().reverse()
}

export default flip
