import { expect } from 'chai'

import truncateToNLinesE from '#esm/string/truncate-to-n-lines'
import truncateToNLinesC from '#cjs/string/truncate-to-n-lines'

function runTests() {
  test('truncateToNLines', () => {
    testTruncateToNLines(truncateToNLinesE)
    testTruncateToNLines(truncateToNLinesC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testTruncateToNLines(truncateToNLines) {
  expect(truncateToNLines(1)('abc')).to.equal('abc')

  expect(truncateToNLines(1)('abc\ndef')).to.equal('abc...')

  expect(truncateToNLines(2)('abc\ndef')).to.equal('abc\ndef')

  expect(truncateToNLines(2)('abc\ndef\nghi')).to.equal('abc\ndef\n...')
}

//
//---------//
// Exports //
//---------//

export default runTests
