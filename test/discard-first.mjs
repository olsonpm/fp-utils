import { expect } from 'chai'

import discardFirstE from '#esm/discard-first'
import discardFirstC from '#cjs/discard-first'

suite('discardFirst', () => {
  test('array', () => {
    testArray(discardFirstE)
    testArray(discardFirstC)
  })

  test('string', () => {
    testString(discardFirstE)
    testString(discardFirstC)
  })

  test('string', () => {
    testTypedArray(discardFirstE)
    testTypedArray(discardFirstC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(discardFirst) {
  const arr = [1, 2, 3]

  expect(discardFirst(0)(arr)).to.deep.equal([1, 2, 3])
  expect(discardFirst(1)(arr)).to.deep.equal([2, 3])
  expect(discardFirst(2)(arr)).to.deep.equal([3])
  expect(discardFirst(4)(arr)).to.deep.equal([])
}

function testString(discardFirst) {
  const str = '123'

  expect(discardFirst(0)(str)).to.equal('123')
  expect(discardFirst(1)(str)).to.equal('23')
  expect(discardFirst(2)(str)).to.equal('3')
  expect(discardFirst(4)(str)).to.equal('')
}

function testTypedArray(discardFirst) {
  const arr = Int8Array.of(1, 2, 3)

  expect(discardFirst(0)(arr)).to.deep.equal(Int8Array.of(1, 2, 3))
  expect(discardFirst(1)(arr)).to.deep.equal(Int8Array.of(2, 3))
  expect(discardFirst(2)(arr)).to.deep.equal(Int8Array.of(3))
  expect(discardFirst(4)(arr)).to.deep.equal(Int8Array.of())
}
