import sinon from 'sinon'
import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import eachE from '#esm/each'
import eachC from '#cjs/each'

suite('each', () => {
  test('arguments', () => {
    testArguments(eachE)
    testArguments(eachC)
  })

  test('array', () => {
    testArray(eachE)
    testArray(eachC)
  })

  test('map', () => {
    testMap(eachE)
    testMap(eachC)
  })

  test('object', () => {
    testObject(eachE)
    testObject(eachC)
  })

  test('set', () => {
    testSet(eachE)
    testSet(eachC)
  })

  test('typedArray', () => {
    testTypedArray(eachE)
    testTypedArray(eachC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(each) {
  const spy = sinon.spy(),
    args = getArgs(1, 2, 3)

  const result = each(spy)(args)
  expect(result).to.equal(args)

  expect(spy.args).to.deep.equal([
    [1, 0, args],
    [2, 1, args],
    [3, 2, args],
  ])
}

function testArray(each) {
  const spy = sinon.spy(),
    arr = [1, 2, 3]

  const result = each(spy)(arr)
  expect(result).to.equal(arr)

  expect(spy.args).to.deep.equal([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
  ])
}

function testMap(each) {
  const spy = sinon.spy(),
    aMap = new Map(Object.entries({ a: 1, b: 2, c: 3 }))

  const result = each(spy)(aMap)
  expect(result).to.equal(aMap)

  expect(spy.args).to.deep.equal([
    [1, 'a', aMap],
    [2, 'b', aMap],
    [3, 'c', aMap],
  ])
}

function testObject(each) {
  const spy = sinon.spy(),
    obj = { a: 1, b: 2, c: 3 }

  const result = each(spy)(obj)
  expect(result).to.equal(obj)

  expect(spy.args).to.deep.equal([
    [1, 'a', obj],
    [2, 'b', obj],
    [3, 'c', obj],
  ])
}

function testSet(each) {
  const spy = sinon.spy(),
    aSet = new Set([1, 2, 3])

  const result = each(spy)(aSet)
  expect(result).to.equal(aSet)

  expect(spy.args).to.deep.equal([
    [1, 1, aSet],
    [2, 2, aSet],
    [3, 3, aSet],
  ])
}

function testTypedArray(each) {
  const spy = sinon.spy(),
    arr = Int8Array.of(1, 2, 3)

  const result = each(spy)(arr)
  expect(result).to.equal(arr)

  expect(spy.args).to.deep.equal([
    [1, 0, arr],
    [2, 1, arr],
    [3, 2, arr],
  ])
}
