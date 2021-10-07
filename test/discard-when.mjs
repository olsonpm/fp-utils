import sinon from 'sinon'
import { expect } from 'chai'

import discardWhenE from '#esm/discard-when'
import discardWhenC from '#cjs/discard-when'

suite('discardWhen', () => {
  test('array', () => {
    testArray(discardWhenE)
    testArray(discardWhenC)
  })

  test('map', () => {
    testMap(discardWhenE)
    testMap(discardWhenC)
  })

  test('object', () => {
    testObject(discardWhenE)
    testObject(discardWhenC)
  })

  test('set', () => {
    testSet(discardWhenE)
    testSet(discardWhenC)
  })

  test('typedArray', () => {
    testTypedArray(discardWhenE)
    testTypedArray(discardWhenC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function gt3(n) {
  return n > 3
}

function testArray(discardWhen) {
  expect(discardWhen(gt3)([1, 2, 3])).to.deep.equal([1, 2, 3])
  expect(discardWhen(gt3)([1, 4, 2, 5])).to.deep.equal([1, 2])

  const gt3Fake = sinon.fake(gt3)
  discardWhen(gt3Fake)([1])

  expect(gt3Fake.args[0]).to.deep.equal([1, 0, [1]])
}

function testMap(discardWhen) {
  let aMap = new Map([['a', 1], ['b', 2], ['c', 3]]),
    expected = new Map([['a', 1], ['b', 2], ['c', 3]])

  expect(discardWhen(gt3)(aMap)).to.deep.equal(expected)

  aMap = new Map([['a', 1], ['b', 4], ['c', 2], ['d', 5]])
  expected = new Map([['a', 1], ['c', 2]])
  expect(discardWhen(gt3)(aMap)).to.deep.equal(expected)

  const gt3Fake = sinon.fake(gt3)
  discardWhen(gt3Fake)(new Map([['a', 1]]))

  expect(gt3Fake.args[0]).to.deep.equal([1, 'a', new Map([['a', 1]])])
}

function testObject(discardWhen) {
  let obj = { a: 1, b: 2, c: 3 },
    expected = { a: 1, b: 2, c: 3 }

  expect(discardWhen(gt3)(obj)).to.deep.equal(expected)

  obj = { a: 1, b: 4, c: 2, d: 5 }
  expected = { a: 1, c: 2 }
  expect(discardWhen(gt3)(obj)).to.deep.equal(expected)

  const gt3Fake = sinon.fake(gt3)
  discardWhen(gt3Fake)({ a: 1 })

  expect(gt3Fake.args[0]).to.deep.equal([1, 'a', { a: 1 }])
}

function testSet(discardWhen) {
  let aMap = new Set([1, 2, 3]),
    expected = new Set([1, 2, 3])

  expect(discardWhen(gt3)(aMap)).to.deep.equal(expected)

  aMap = new Set([1, 4, 2, 5])
  expected = new Set([1, 2])
  expect(discardWhen(gt3)(aMap)).to.deep.equal(expected)

  const gt3Fake = sinon.fake(gt3)
  discardWhen(gt3Fake)(new Set([1]))

  expect(gt3Fake.args[0]).to.deep.equal([1, 1, new Set([1])])
}

function testTypedArray(discardWhen) {
  let aMap = Int8Array.of(1, 2, 3),
    expected = Int8Array.of(1, 2, 3)

  expect(discardWhen(gt3)(aMap)).to.deep.equal(expected)

  aMap = Int8Array.of(1, 4, 2, 5)
  expected = Int8Array.of(1, 2)
  expect(discardWhen(gt3)(aMap)).to.deep.equal(expected)

  const gt3Fake = sinon.fake(gt3)
  discardWhen(gt3Fake)(Int8Array.of(1))

  expect(gt3Fake.args[0]).to.deep.equal([1, 0, Int8Array.of(1)])
}
