import { fake } from 'sinon'
import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import pareE from '#esm/pare'
import pareC from '#cjs/pare'

suite('pare', () => {
  test('arguments', () => {
    testArguments(pareE)
    testArguments(pareC)
  })

  test('array', () => {
    testArray(pareE)
    testArray(pareC)
  })

  test('map', () => {
    testMap(pareE)
    testMap(pareC)
  })

  test('object', () => {
    testObject(pareE)
    testObject(pareC)
  })

  test('set', () => {
    testSet(pareE)
    testSet(pareC)
  })

  test('typedArray', () => {
    testTypedArray(pareE)
    testTypedArray(pareC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function sum(total, n) {
  return total + n
}

function testArguments(pare) {
  const args = getArgs(1, 2, 3),
    sumFake = fake(sum)

  const result = pare(sumFake, 0)(args)
  expect(result).to.equal(6)

  expect(sumFake.args).to.deep.equal([
    [0, 1, 0, args],
    [1, 2, 1, args],
    [3, 3, 2, args],
  ])
}

function testArray(pare) {
  const arr = [1, 2, 3],
    sumFake = fake(sum)

  const result = pare(sumFake, 0)(arr)
  expect(result).to.equal(6)

  expect(sumFake.args).to.deep.equal([
    [0, 1, 0, arr],
    [1, 2, 1, arr],
    [3, 3, 2, arr],
  ])
}

function testMap(pare) {
  const aMap = new Map([['a', 1], ['b', 2], ['c', 3]]),
    sumFake = fake(sum)

  const result = pare(sumFake, 0)(aMap)
  expect(result).to.equal(6)

  expect(sumFake.args).to.deep.equal([
    [0, 1, 'a', aMap],
    [1, 2, 'b', aMap],
    [3, 3, 'c', aMap],
  ])
}

function testObject(pare) {
  const obj = { a: 1, b: 2, c: 3 },
    sumFake = fake(sum)

  const result = pare(sumFake, 0)(obj)
  expect(result).to.equal(6)

  expect(sumFake.args).to.deep.equal([
    [0, 1, 'a', obj],
    [1, 2, 'b', obj],
    [3, 3, 'c', obj],
  ])
}

function testSet(pare) {
  const aSet = new Set([1, 2, 3]),
    sumFake = fake(sum)

  const result = pare(sumFake, 0)(aSet)
  expect(result).to.equal(6)

  expect(sumFake.args).to.deep.equal([
    [0, 1, 1, aSet],
    [1, 2, 2, aSet],
    [3, 3, 3, aSet],
  ])
}

function testTypedArray(pare) {
  const arr = Int8Array.of(1, 2, 3),
    sumFake = fake(sum)

  const result = pare(sumFake, 0)(arr)
  expect(result).to.equal(6)

  expect(sumFake.args).to.deep.equal([
    [0, 1, 0, arr],
    [1, 2, 1, arr],
    [3, 3, 2, arr],
  ])
}
