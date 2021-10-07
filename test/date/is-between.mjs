import { expect } from 'chai'

import isBetweenE from '#esm/date/is-between'
import isBetweenC from '#cjs/date/is-between'

function runTests() {
  test('isBetween', () => {
    testIsBetween(isBetweenE)
    testIsBetween(isBetweenC)
  })
}

//
//------------------//
// Helper Functions //
//------------------//

function testIsBetween(isBetween) {
  const aYearAgo = new Date(),
    aYearFromNow = new Date(),
    now = new Date(),
    y = now.getFullYear()

  aYearAgo.setFullYear(y - 1)
  aYearFromNow.setSeconds(y + 1)

  expect(isBetween(aYearAgo, aYearFromNow)(now)).to.be.true
  expect(isBetween(aYearAgo, aYearFromNow)(aYearFromNow)).to.be.true
  expect(isBetween(aYearAgo, now)(aYearFromNow)).to.be.false
  expect(isBetween(now, aYearFromNow)(aYearAgo)).to.be.false
}

//
//---------//
// Exports //
//---------//

export default runTests
