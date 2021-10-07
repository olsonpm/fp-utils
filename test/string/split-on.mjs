import { expect } from 'chai'

import splitOnE from '#esm/string/split-on'
import splitOnC from '#cjs/string/split-on'

function runTests() {
  test('splitOn', () => {
    testSplitOn(splitOnE)
    testSplitOn(splitOnC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testSplitOn(splitOn) {
  expect(splitOn('**')('a**bc**d')).to.deep.equal(['a', 'bc', 'd'])
  expect(splitOn('')('abc')).to.deep.equal(['a', 'b', 'c'])
}

//
//---------//
// Exports //
//---------//

export default runTests
