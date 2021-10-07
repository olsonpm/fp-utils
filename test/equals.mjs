import { expect } from 'chai'

import equalsE from '#esm/equals'
import equalsC from '#cjs/equals'

test('equals', () => {
  testEquals(equalsE)
  testEquals(equalsC)
})

//
//------------------//
// Helper Functions //
//------------------//

function testEquals(equals) {
  expect(equals('a')('a')).to.be.true
  expect(equals('a')('b')).to.be.false
  expect(equals('a')()).to.be.false
  expect(equals('1')(1)).to.be.false
  expect(equals(1)(1)).to.be.true

  // edge case (undefined === undefined)
  expect(equals()()).to.be.true
}
