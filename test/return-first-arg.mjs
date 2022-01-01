import { expect } from 'chai'

import returnFirstArgE from '#esm/return-first-arg'
import returnFirstArgC from '#cjs/return-first-arg'

test('returnFirstArg', () => {
  testReturnFirstArg(returnFirstArgE)
  testReturnFirstArg(returnFirstArgC)
})

//
//------------------//
// Helper Functions //
//------------------//

function testReturnFirstArg(returnFirstArg) {
  const obj = { a: 1 }
  expect(returnFirstArg(obj, 2)).to.equal(obj)
}
