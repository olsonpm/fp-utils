import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import containedInE from '#esm/contained-in'
import containedInC from '#cjs/contained-in'

suite('containedIn', () => {
  test('arguments', () => {
    testArguments(containedInE)
    testArguments(containedInC)
  })

  test('array', () => {
    testArray(containedInE)
    testArray(containedInC)
  })

  test('map', () => {
    testMap(containedInE)
    testMap(containedInC)
  })

  test('object', () => {
    testObject(containedInE)
    testObject(containedInC)
  })

  test('set', () => {
    testSet(containedInE)
    testSet(containedInC)
  })

  test('string', () => {
    testString(containedInE)
    testString(containedInC)
  })

  test('typedArray', () => {
    testTypedArray(containedInE)
    testTypedArray(containedInC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(containedIn) {
  expect(containedIn(getArgs(1, 2))(1)).to.be.true
  expect(containedIn(getArgs(1, 2))(3)).to.be.false
}

function testArray(containedIn) {
  const arr = [1, 2]

  expect(containedIn(arr)(1)).to.be.true
  expect(containedIn(arr)(3)).to.be.false
}

function testMap(containedIn) {
  const aMap = new Map([['a', 1], ['b', 2]])

  expect(containedIn(aMap)(1)).to.be.true
  expect(containedIn(aMap)(3)).to.be.false
}

function testObject(containedIn) {
  const obj = { a: 1, b: 2 }

  expect(containedIn(obj)(1)).to.be.true
  expect(containedIn(obj)(3)).to.be.false
}

function testSet(containedIn) {
  const aSet = new Set([1, 2])

  expect(containedIn(aSet)(1)).to.be.true
  expect(containedIn(aSet)(3)).to.be.false
}

function testString(containedIn) {
  const str = 'abcd'

  expect(containedIn(str)('bc')).to.be.true
  expect(containedIn(str)('e')).to.be.false
}

function testTypedArray(containedIn) {
  const arr = Int8Array.of(1, 2)

  expect(containedIn(arr)(1)).to.be.true
  expect(containedIn(arr)(3)).to.be.false
}
