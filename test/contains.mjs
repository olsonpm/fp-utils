import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import containsE from '#esm/contains'
import containsC from '#cjs/contains'

suite('contains', () => {
  test('arguments', () => {
    testArguments(containsE)
    testArguments(containsC)
  })

  test('array', () => {
    testArray(containsE)
    testArray(containsC)
  })

  test('map', () => {
    testMap(containsE)
    testMap(containsC)
  })

  test('object', () => {
    testObject(containsE)
    testObject(containsC)
  })

  test('set', () => {
    testSet(containsE)
    testSet(containsC)
  })

  test('string', () => {
    testString(containsE)
    testString(containsC)
  })

  test('typedArray', () => {
    testTypedArray(containsE)
    testTypedArray(containsC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(contains) {
  expect(contains(1)(getArgs(1, 2))).to.be.true
  expect(contains(3)(getArgs(1, 2))).to.be.false
}

function testArray(contains) {
  const arr = [1, 2]

  expect(contains(1)(arr)).to.be.true
  expect(contains(3)(arr)).to.be.false
}

function testMap(contains) {
  const aMap = new Map([['a', 1], ['b', 2]])

  expect(contains(1)(aMap)).to.be.true
  expect(contains(3)(aMap)).to.be.false
}

function testObject(contains) {
  const obj = { a: 1, b: 2 }

  expect(contains(1)(obj)).to.be.true
  expect(contains(3)(obj)).to.be.false
}

function testSet(contains) {
  const aSet = new Set([1, 2])

  expect(contains(1)(aSet)).to.be.true
  expect(contains(3)(aSet)).to.be.false
}

function testString(contains) {
  const str = 'abcd'

  expect(contains('bc')(str)).to.be.true
  expect(contains('e')(str)).to.be.false
}

function testTypedArray(contains) {
  const arr = Int8Array.of(1, 2)

  expect(contains(1)(arr)).to.be.true
  expect(contains(3)(arr)).to.be.false
}
