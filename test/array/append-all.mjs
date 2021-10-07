import { expect } from 'chai'

import appendAllE from '#esm/array/append-all'
import appendAllC from '#cjs/array/append-all'

function runTests() {
  test('appendAll', () => {
    testArray(appendAllE)
    testArray(appendAllC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testArray(appendAll) {
  expect(appendAll([3, 4])([1, 2])).to.deep.equal([1, 2, 3, 4])
}

//
//---------//
// Exports //
//---------//

export default runTests
