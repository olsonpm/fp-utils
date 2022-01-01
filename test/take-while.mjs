import { fake } from 'sinon'
import { expect } from 'chai'

import takeWhileE from '#esm/take-while'
import takeWhileC from '#cjs/take-while'

suite('takeWhile', () => {
  test('array', () => {
    testArray(takeWhileE)
    testArray(takeWhileC)
  })

  test('typedArray', () => {
    testTypedArray(takeWhileE)
    testTypedArray(takeWhileC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function lt3(n) {
  return n < 3
}

function testArray(takeWhile) {
  const arr = [1, 2, 3, 4],
    lt3Fake = fake(lt3)

  expect(takeWhile(lt3Fake)(arr)).to.deep.equal([1, 2])

  expect(lt3Fake.args).to.deep.equal([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
  ])
}

function testTypedArray(takeWhile) {
  const arr = Int8Array.of(1, 2, 3, 4),
    lt3Fake = fake(lt3)

  expect(takeWhile(lt3Fake)(arr)).to.deep.equal(Int8Array.of(1, 2))

  expect(lt3Fake.args).to.deep.equal([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
  ])
}
