import { fake } from 'sinon'
import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import groupByE from '#esm/group-by'
import groupByC from '#cjs/group-by'

suite('groupBy', () => {
  test('arguments', () => {
    testArguments(groupByE)
    testArguments(groupByC)
  })

  test('array', () => {
    testArray(groupByE)
    testArray(groupByC)
  })

  test('map', () => {
    testMap(groupByE)
    testMap(groupByC)
  })

  test('object', () => {
    testObject(groupByE)
    testObject(groupByC)
  })

  test('set', () => {
    testSet(groupByE)
    testSet(groupByC)
  })

  test('typedArray', () => {
    testTypedArray(groupByE)
    testTypedArray(groupByC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(groupBy) {
  const ceilFake = fake(Math.ceil),
    args = getArgs(0.9, 1.2, 1.8)

  const result = groupBy(ceilFake)(args)

  expect(result).to.deep.equal({
    1: [0.9],
    2: [1.2, 1.8]
  })

  expect(ceilFake.args).to.deep.equal([
    [0.9, 0, args],
    [1.2, 1, args],
    [1.8, 2, args],
  ])
}

function testArray(groupBy) {
  const ceilFake = fake(Math.ceil),
    arr = [0.9, 1.2, 1.8]

  const result = groupBy(ceilFake)(arr)

  expect(result).to.deep.equal({
    1: [0.9],
    2: [1.2, 1.8]
  })

  expect(ceilFake.args).to.deep.equal([
    [0.9, 0, arr],
    [1.2, 1, arr],
    [1.8, 2, arr],
  ])
}

function testMap(groupBy) {
  const ceilFake = fake(Math.ceil),
    aMap = new Map([['a', 0.9], ['b', 1.2], ['c', 1.8]])

  const result = groupBy(ceilFake)(aMap)

  expect(result).to.deep.equal({
    1: [0.9],
    2: [1.2, 1.8]
  })

  expect(ceilFake.args).to.deep.equal([
    [0.9, 'a', aMap],
    [1.2, 'b', aMap],
    [1.8, 'c', aMap],
  ])
}

function testObject(groupBy) {
  const ceilFake = fake(Math.ceil),
    obj = { a: 0.9, b: 1.2, c: 1.8 }

  const result = groupBy(ceilFake)(obj)

  expect(result).to.deep.equal({
    1: [0.9],
    2: [1.2, 1.8]
  })

  expect(ceilFake.args).to.deep.equal([
    [0.9, 'a', obj],
    [1.2, 'b', obj],
    [1.8, 'c', obj],
  ])
}

function testSet(groupBy) {
  const ceilFake = fake(Math.ceil),
    aSet = new Set([0.9, 1.2, 1.8])

  const result = groupBy(ceilFake)(aSet)

  expect(result).to.deep.equal({
    1: [0.9],
    2: [1.2, 1.8]
  })

  expect(ceilFake.args).to.deep.equal([
    [0.9, 0.9, aSet],
    [1.2, 1.2, aSet],
    [1.8, 1.8, aSet],
  ])
}

function testTypedArray(groupBy) {
  const ceilFake = fake(Math.ceil),
    arr = Float64Array.of(0.9, 1.2, 1.8)

  const result = groupBy(ceilFake)(arr)

  expect(result).to.deep.equal({
    1: [0.9],
    2: [1.2, 1.8]
  })

  expect(ceilFake.args).to.deep.equal([
    [0.9, 0, arr],
    [1.2, 1, arr],
    [1.8, 2, arr],
  ])
}
