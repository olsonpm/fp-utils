import { expect } from 'chai'

import flipE from '#esm/flip'
import flipC from '#cjs/flip'

suite('flip', () => {
  test('array', () => {
    testArray(flipE)
    testArray(flipC)
  })

  test('typedArray', () => {
    testTypedArray(flipE)
    testTypedArray(flipC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(flip) {
  expect(flip([1, 2])).to.deep.equal([2, 1])
}

function testTypedArray(flip) {
  expect(flip(Int8Array.of(1, 2))).to.deep.equal(Int8Array.of(2, 1))
}
