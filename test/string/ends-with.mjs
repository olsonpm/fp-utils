import { expect } from 'chai'

import endsWithE from '#esm/string/ends-with'
import endsWithC from '#cjs/string/ends-with'

function runTests() {
  test('endsWith', () => {
    testEndsWith(endsWithE)
    testEndsWith(endsWithC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testEndsWith(endsWith) {
  expect(endsWith('bc')('abc')).to.be.true
  expect(endsWith('d')('abc')).to.be.false
}

//
//---------//
// Exports //
//---------//

export default runTests
