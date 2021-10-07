import sinon from 'sinon'
import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import mapValuesE from '#esm/map-values'
import mapValuesC from '#cjs/map-values'

suite('mapValues', () => {
  test('array', () => {
    testArray(mapValuesE)
    testArray(mapValuesC)
  })

  test('map', () => {
    testMap(mapValuesE)
    testMap(mapValuesC)
  })

  test('object', () => {
    testObject(mapValuesE)
    testObject(mapValuesC)
  })

  test('set', () => {
    testSet(mapValuesE)
    testSet(mapValuesC)
  })

  test('typedArray', () => {
    testTypedArray(mapValuesE)
    testTypedArray(mapValuesC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function inc(n) {
  return n + 1
}

function testArray(mapValues) {
  const arr = [1, 2, 3],
    incFake = sinon.fake(inc)

  const result = mapValues(incFake)(arr)
  expect(result).to.deep.equal([2, 3, 4])

  expect(incFake.args).to.deep.equal([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
  ])
}

function testMap(mapValues) {
  const aMap = new Map([['a', 1], ['b', 2], ['c', 3]]),
    incFake = sinon.fake(inc)

  const result = mapValues(incFake)(aMap)
  expect(result).to.deep.equal(new Map([['a', 2], ['b', 3], ['c', 4]]))

  expect(incFake.args).to.deep.equal([
    [1, 'a', aMap],
    [2, 'b', aMap],
    [3, 'c', aMap],
  ])
}

function testObject(mapValues) {
  const obj = { a: 1, b: 2, c: 3 },
    incFake = sinon.fake(inc)

  const result = mapValues(incFake)(obj)
  expect(result).to.deep.equal({ a: 2, b: 3, c: 4 })

  expect(incFake.args).to.deep.equal([
    [1, 'a', obj],
    [2, 'b', obj],
    [3, 'c', obj],
  ])
}

function testSet(mapValues) {
  const aSet = new Set([1, 2, 3]),
  incFake = sinon.fake(inc)

  const result = mapValues(incFake)(aSet)
  expect(result).to.deep.equal(new Set([2, 3, 4]))

  expect(incFake.args).to.deep.equal([
    [1, 1, aSet],
    [2, 2, aSet],
    [3, 3, aSet],
  ])
}

function testTypedArray(mapValues) {
  const arr = Int8Array.of(1, 2, 3),
    incFake = sinon.fake(inc)

  const result = mapValues(incFake)(arr)
  expect(result).to.deep.equal(Int8Array.of(2, 3, 4))

  expect(incFake.args).to.deep.equal([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
  ])
}
