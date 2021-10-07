import { expect } from 'chai'

import splitEveryE from '#esm/array/split-every'
import splitEveryC from '#cjs/array/split-every'

function runTests() {
  test('splitEvery', () => {
    testArray(splitEveryE)
    testArray(splitEveryC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testArray(splitEvery) {
  const oneThruTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  expect(splitEvery(2)(oneThruTen)).to.deep.equal([
    [1, 2],
    [3, 4],
    [5, 6],
    [7, 8],
    [9, 10]
  ])

  expect(splitEvery(3)(oneThruTen)).to.deep.equal([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10]
  ])

  expect(splitEvery(3)([1])).to.deep.equal([[1]])
  expect(splitEvery(3)([])).to.deep.equal([[]])
}

//
//---------//
// Exports //
//---------//

export default runTests
