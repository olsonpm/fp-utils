import { expect } from 'chai'

import isAfterE from '#esm/date/is-after'
import isAfterC from '#cjs/date/is-after'

function runTests() {
  test('isAfter', () => {
    testIsAfter(isAfterE)
    testIsAfter(isAfterC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testIsAfter(isAfter) {
  const aYearAgo = new Date(),
    now = new Date(),
    y = aYearAgo.getFullYear()

  aYearAgo.setFullYear(y - 1)

  expect(isAfter(aYearAgo)(now)).to.be.true
  expect(isAfter(now)(aYearAgo)).to.be.false
  expect(isAfter(now)(now)).to.be.false
}

//
//---------//
// Exports //
//---------//

export default runTests
