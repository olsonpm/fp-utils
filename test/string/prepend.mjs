import { expect } from 'chai'

import prependE from '#esm/string/prepend'
import prependC from '#cjs/string/prepend'

function runTests() {
  test('prepend', () => {
    testPrepend(prependE)
    testPrepend(prependC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testPrepend(prepend) {
  expect(prepend('a')('b')).to.equal('ab')
}

//
//---------//
// Exports //
//---------//

export default runTests
