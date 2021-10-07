import { expect } from 'chai'

import mAppendAllE from '#esm/array/m-append-all'
import mAppendAllC from '#cjs/array/m-append-all'

function runTests() {
  test('mAppendAll', () => {
    testArray(mAppendAllE)
    testArray(mAppendAllC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testArray(mAppendAll) {
  const ab = ['a', 'b']

  const result = mAppendAll(['c', 'd'])(ab)

  expect(result).to.deep.equal(['a', 'b', 'c', 'd'])

  // ensure ab is mutated
  expect(result).to.equal(ab)
}

//
//---------//
// Exports //
//---------//

export default runTests
