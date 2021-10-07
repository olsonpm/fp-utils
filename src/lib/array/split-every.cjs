const assertArgIsType = require('../../internal/assert-arg-is-type.cjs')

module.exports = n => {
  if (!(Number.isInteger(n) && n > 0)) {
    throw new Error('n must be a positive integer' + `\n n: ${n}`)
  }

  return anArray => {
    assertArgIsType(anArray, 'anArray', 'array', 'splitEvery')

    if (!anArray.length) return [[]]

    const numArrays = Math.ceil(anArray.length / n),
      res = new Array(numArrays)

    res.fill([])

    for (let i = 0; i < numArrays - 1; i += 1) {
      res[i] = anArray.slice(i * n, (i + 1) * n)
    }

    res[numArrays - 1] = anArray.slice((numArrays - 1) * n)

    return res
  }
}
