import { expect } from 'chai'

import truncateToNCharsE from '#esm/string/truncate-to-n-chars'
import truncateToNCharsC from '#cjs/string/truncate-to-n-chars'

function runTests() {
  test('truncateToNChars', () => {
    testtruncateToNChars(truncateToNCharsE)
    testtruncateToNChars(truncateToNCharsC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testtruncateToNChars(truncateToNChars) {
  expect(truncateToNChars(10)('0123456789')).to.equal('0123456789')
  expect(truncateToNChars(10)('0123456789x')).to.equal('0123456...')

  // edge case
  expect(truncateToNChars(3)('abc')).to.equal('abc')
  expect(truncateToNChars(3)('abcd')).to.equal('...')
}

//
//---------//
// Exports //
//---------//

export default runTests
