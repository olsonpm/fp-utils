import { expect } from 'chai'

import startsWithE from '#esm/string/starts-with'
import startsWithC from '#cjs/string/starts-with'

function runTests() {
  test('startsWith', () => {
    testStartsWith(startsWithE)
    testStartsWith(startsWithC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testStartsWith(startsWith) {
  expect(startsWith('ab')('abc')).to.be.true
  expect(startsWith('a')('bcd')).to.be.false
}

//
//---------//
// Exports //
//---------//

export default runTests
