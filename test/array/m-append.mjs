import { expect } from 'chai'

import mAppendE from '#esm/array/m-append'
import mAppendC from '#cjs/array/m-append'

function runTests() {
  test('mAppend', () => {
    testArray(mAppendE)
    testArray(mAppendC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testArray(mAppend) {
  const ab = ['a', 'b']

  const result = mAppend('c')(ab)

  expect(result).to.deep.equal(['a', 'b', 'c'])

  // ensure ab is mutated
  expect(result).to.equal(ab)
}

//
//---------//
// Exports //
//---------//

export default runTests
