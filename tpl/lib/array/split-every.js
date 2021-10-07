{{{import 'assertArgIsType' '../../internal'}}}

{{!
  if a function like this would be useful for others when using typed arrays
  then we can port it.  I haven't used typed arrays and can't imagine a use-case
  for splitEvery
}}
{{{exportInline}}} n => {
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
