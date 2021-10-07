import { expect } from 'chai'

import wrapInE from '#esm/string/wrap-in'
import wrapInC from '#cjs/string/wrap-in'

function runTests() {
  test('wrapIn', () => {
    testWrapIn(wrapInE)
    testWrapIn(wrapInC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testWrapIn(wrapIn) {
  expect(wrapIn('**')('abc')).to.equal('**abc**')
}

//
//---------//
// Exports //
//---------//

export default runTests
