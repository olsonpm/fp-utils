import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import containsAllE from '#esm/contains-all'
import containsAllC from '#cjs/contains-all'

const oneTwo = [1, 2]
const oneFour = [1, 4]

suite('containsAll', () => {
  test('arguments', () => {
    testArguments(containsAllE)
    testArguments(containsAllC)
  })

  test('array', () => {
    testArray(containsAllE)
    testArray(containsAllC)
  })

  test('map', () => {
    testMap(containsAllE)
    testMap(containsAllC)
  })

  test('object', () => {
    testObject(containsAllE)
    testObject(containsAllC)
  })

  test('set', () => {
    testSet(containsAllE)
    testSet(containsAllC)
  })

  test('string', () => {
    testString(containsAllE)
    testString(containsAllC)
  })

  test('typedArray', () => {
    testTypedArray(containsAllE)
    testTypedArray(containsAllC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(containsAll) {
  const args = getArgs(3, 2, 1)
  expect(containsAll(oneTwo)(args)).to.be.true
  expect(containsAll(oneFour)(args)).to.be.false
}

function testArray(containsAll) {
  const arr = [3, 2, 1]
  expect(containsAll(oneTwo)(arr)).to.be.true
  expect(containsAll(oneFour)(arr)).to.be.false
}

function testMap(containsAll) {
  const aMap = new Map([['c', 3], ['b', 2], ['a', 1]])

  expect(containsAll(oneTwo)(aMap)).to.be.true
  expect(containsAll(oneFour)(aMap)).to.be.false
}

function testObject(containsAll) {
  const obj = { c: 3, b: 2, a: 1 }

  expect(containsAll(oneTwo)(obj)).to.be.true
  expect(containsAll(oneFour)(obj)).to.be.false
}

function testSet(containsAll) {
  const aSet = new Set([3, 2, 1])

  expect(containsAll(oneTwo)(aSet)).to.be.true
  expect(containsAll(oneFour)(aSet)).to.be.false
}

function testString(containsAll) {
  const str = 'abcd'

  expect(containsAll(['b', 'c'])(str)).to.be.true
  expect(containsAll(['b', 'e'])(str)).to.be.false
}

function testTypedArray(containsAll) {
  const arr = Int8Array.of(3, 2, 1)

  expect(containsAll(oneTwo)(arr)).to.be.true
  expect(containsAll(oneFour)(arr)).to.be.false
}
