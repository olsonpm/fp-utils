import sinon from 'sinon'
import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import anyE from '#esm/any'
import anyC from '#cjs/any'

suite('any', () => {
  test('arguments', () => {
    testArguments(anyE)
    testArguments(anyC)
  })

  test('array', () => {
    testArray(anyE)
    testArray(anyC)
  })

  test('map', () => {
    testMap(anyE)
    testMap(anyC)
  })

  test('object', () => {
    testObject(anyE)
    testObject(anyC)
  })

  test('set', () => {
    testSet(anyE)
    testSet(anyC)
  })

  test('typedArray', () => {
    testTypedArray(anyE)
    testTypedArray(anyC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function gt3(num) {
  return num > 3
}

function testArguments(any) {
  expect(any(gt3)(getArgs(1, 2, 3))).to.be.false
  expect(any(gt3)(getArgs(1, 4, 3))).to.be.true

  const gt3fake = sinon.fake(gt3)

  any(gt3fake)(getArgs(1))

  expect(gt3fake.args[0]).to.deep.equal([1, 0, getArgs(1)])
}

function testArray(any) {
  expect(any(gt3)([1, 2, 3])).to.be.false
  expect(any(gt3)([1, 4, 3])).to.be.true

  const gt3fake = sinon.fake(gt3)

  any(gt3fake)([1])

  expect(gt3fake.args[0]).to.deep.equal([1, 0, [1]])
}

function testMap(any) {
  expect(any(gt3)(new Map([['a', 1], ['b', 2], ['c', 3]]))).to.be.false
  expect(any(gt3)(new Map([['a', 1], ['b', 4], ['c', 3]]))).to.be.true

  const gt3fake = sinon.fake(gt3)

  any(gt3fake)(new Map([['a', 1]]))

  expect(gt3fake.args[0]).to.deep.equal([1, 'a', new Map([['a', 1]])])
}

function testObject(any) {
  expect(any(gt3)({ a: 1, b: 2, c: 3 })).to.be.false
  expect(any(gt3)({ a: 1, b: 4, c: 3 })).to.be.true

  const gt3fake = sinon.fake(gt3)

  any(gt3fake)({ a: 1 })

  expect(gt3fake.args[0]).to.deep.equal([1, 'a', { a: 1 }])
}

function testSet(any) {
  expect(any(gt3)(new Set([1, 2, 3]))).to.be.false
  expect(any(gt3)(new Set([1, 4, 3]))).to.be.true

  const gt3fake = sinon.fake(gt3)

  any(gt3fake)(new Set([1]))

  expect(gt3fake.args[0]).to.deep.equal([1, 1, new Set([1])])
}

function testTypedArray(any) {
  expect(any(gt3)(Int8Array.of(1, 2, 3))).to.be.false
  expect(any(gt3)(Int8Array.of(1, 4, 3))).to.be.true

  const gt3fake = sinon.fake(gt3)

  any(gt3fake)(Int8Array.of(1))

  expect(gt3fake.args[0]).to.deep.equal([1, 0, Int8Array.of(1)])
}
