import { expect } from 'chai'

import isBeforeE from '#esm/date/is-before'
import isBeforeC from '#cjs/date/is-before'

function runTests() {
  test('isBefore', () => {
    testIsBefore(isBeforeE)
    testIsBefore(isBeforeC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testIsBefore(isAfter) {
  const aYearAgo = new Date(),
    now = new Date(),
    y = aYearAgo.getFullYear()

  aYearAgo.setFullYear(y - 1)

  expect(isAfter(now)(aYearAgo)).to.be.true
  expect(isAfter(aYearAgo)(now)).to.be.false
  expect(isAfter(now)(now)).to.be.false
}

//
//---------//
// Exports //
//---------//

export default runTests
