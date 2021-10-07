import { expect } from 'chai'

import joinE from '#esm/join'
import joinC from '#cjs/join'

suite('join', () => {
  test('array', () => {
    testArray(joinE)
    testArray(joinC)
  })

  test('typedArray', () => {
    testTypedArray(joinE)
    testTypedArray(joinC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(join) {
  expect(join(',')(['a', 'b'])).to.equal('a,b')
}

function testTypedArray(join) {
  expect(join(',')(Int8Array.of(1, 2))).to.equal('1,2')
}
