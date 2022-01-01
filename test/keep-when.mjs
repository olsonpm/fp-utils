import { fake } from 'sinon'
import { expect } from 'chai'

import keepWhenE from '#esm/keep-when'
import keepWhenC from '#cjs/keep-when'

suite('keepWhen', () => {
  test('array', () => {
    testArray(keepWhenE)
    testArray(keepWhenC)
  })

  test('map', () => {
    testMap(keepWhenE)
    testMap(keepWhenC)
  })

  test('object', () => {
    testObject(keepWhenE)
    testObject(keepWhenC)
  })

  test('set', () => {
    testSet(keepWhenE)
    testSet(keepWhenC)
  })

  test('typedArray', () => {
    testTypedArray(keepWhenE)
    testTypedArray(keepWhenC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function isEven(n) {
  return n % 2 === 0
}

function testArray(keepWhen) {
  const arr = [1, 2, 3, 4],
    isEvenFake = fake(isEven)

  const result = keepWhen(isEvenFake)(arr)
  expect(result).to.deep.equal([2, 4])

  expect(isEvenFake.args).to.deep.equals([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
    [4, 3, arr],
  ])
}

function testMap(keepWhen) {
  const aMap = new Map([['a', 1], ['b', 2], ['c', 3], ['d', 4]]),
    isEvenFake = fake(isEven)

  const result = keepWhen(isEvenFake)(aMap)
  expect(result).to.deep.equal(new Map([['b', 2], ['d', 4]]))

  expect(isEvenFake.args).to.deep.equals([
    [1, 'a', aMap],
    [2, 'b', aMap],
    [3, 'c', aMap],
    [4, 'd', aMap],
  ])
}

function testObject(keepWhen) {
  const obj = { a: 1, b: 2, c: 3, d: 4 },
    isEvenFake = fake(isEven)

  const result = keepWhen(isEvenFake)(obj)
  expect(result).to.deep.equal({ b: 2, d: 4 })

  expect(isEvenFake.args).to.deep.equals([
    [1, 'a', obj],
    [2, 'b', obj],
    [3, 'c', obj],
    [4, 'd', obj],
  ])
}

function testSet(keepWhen) {
  const aSet = new Set([1, 2, 3, 4]),
    isEvenFake = fake(isEven)

  const result = keepWhen(isEvenFake)(aSet)
  expect(result).to.deep.equal(new Set([2, 4]))

  expect(isEvenFake.args).to.deep.equals([
    [1, 1, aSet],
    [2, 2, aSet],
    [3, 3, aSet],
    [4, 4, aSet],
  ])
}

function testTypedArray(keepWhen) {
  const arr = Int8Array.of(1, 2, 3, 4),
    isEvenFake = fake(isEven)

  const result = keepWhen(isEvenFake)(arr)
  expect(result).to.deep.equal(Int8Array.of(2, 4))

  expect(isEvenFake.args).to.deep.equals([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
    [4, 3, arr],
  ])
}
