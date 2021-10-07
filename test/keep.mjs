import { expect } from 'chai'

import keepE from '#esm/keep'
import keepC from '#cjs/keep'

suite('keep', () => {
  test('array', () => {
    testArray(keepE)
    testArray(keepC)
  })

  test('set', () => {
    testSet(keepE)
    testSet(keepC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(keep) {
  const arr = [1, 2, 3, 4]

  const result = keep([1, 3, 5])(arr)
  expect(result).to.deep.equal([1, 3])
}

function testSet(keep) {
  const aSet = new Set([1, 2, 3, 4])

  const result = keep(new Set([1, 3, 5]))(aSet)
  expect(result).to.deep.equal(new Set([1, 3]))
}
