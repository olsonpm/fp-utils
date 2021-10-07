import { expect } from 'chai'

import getSizeE from '#esm/get-size'
import getSizeC from '#cjs/get-size'

suite('getSize', () => {
  test('arguments', () => {
    testArguments(getSizeE)
    testArguments(getSizeC)
  })
  test('array', () => {
    testArray(getSizeE)
    testArray(getSizeC)
  })
  test('map', () => {
    testMap(getSizeE)
    testMap(getSizeC)
  })
  test('object', () => {
    testObject(getSizeE)
    testObject(getSizeC)
  })
  test('set', () => {
    testSet(getSizeE)
    testSet(getSizeC)
  })
  test('string', () => {
    testString(getSizeE)
    testString(getSizeC)
  })
  test('typedArray', () => {
    testTypedArray(getSizeE)
    testTypedArray(getSizeC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(getSize) {
  function fn() {
    expect(getSize(arguments)).to.equal(expectedArgs)
  }

  let expectedArgs = 0
  fn()

  expectedArgs = 1
  fn('a')

  expectedArgs = 3
  fn('a', 'b', 'c')
}

function testArray(getSize) {
  expect(getSize([1, 2, 3])).to.equal(3)
  expect(getSize([])).to.equal(0)
}

function testMap(getSize) {
  expect(getSize(new Map([['a', 1], ['b', 2]]))).to.equal(2)
  expect(getSize(new Map())).to.equal(0)
}

function testObject(getSize) {
  expect(getSize({ a: 1, b: 2 })).to.equal(2)
  expect(getSize({})).to.equal(0)
}

function testSet(getSize) {
  expect(getSize(new Set([1, 2]))).to.equal(2)
  expect(getSize(new Set())).to.equal(0)
}

function testString(getSize) {
  expect(getSize('abc')).to.equal(3)
  expect(getSize('')).to.equal(0)
}

function testTypedArray(getSize) {
  expect(getSize(Int8Array.of(1, 2, 3))).to.equal(3)
  expect(getSize(Int8Array.of())).to.equal(0)
}
