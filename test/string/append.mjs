import { expect } from 'chai'

import appendE from '#esm/string/append'
import appendC from '#cjs/string/append'

function runTests() {
  test('append', () => {
    testAppend(appendE)
    testAppend(appendC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testAppend(append) {
  expect(append('b')('a')).to.equal('ab')
}

//
//---------//
// Exports //
//---------//

export default runTests
