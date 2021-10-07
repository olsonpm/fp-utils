import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import isEmptyE from '#esm/is-empty'
import isEmptyC from '#cjs/is-empty'

suite('isEmpty', () => {
  test('arguments', () => {
    testArguments(isEmptyE)
    testArguments(isEmptyC)
  })

  test('array', () => {
    testArray(isEmptyE)
    testArray(isEmptyC)
  })

  test('map', () => {
    testMap(isEmptyE)
    testMap(isEmptyC)
  })

  test('null', () => {
    expect(isEmptyE(null)).to.be.true
    expect(isEmptyC(null)).to.be.true
  })

  test('object', () => {
    testObject(isEmptyE)
    testObject(isEmptyC)
  })

  test('set', () => {
    testSet(isEmptyE)
    testSet(isEmptyC)
  })

  test('string', () => {
    testString(isEmptyE)
    testString(isEmptyC)
  })

  test('undefined', () => {
    expect(isEmptyE(undefined)).to.be.true
    expect(isEmptyC(undefined)).to.be.true
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(isEmpty) {
  expect(isEmpty(getArgs())).to.be.true
  expect(isEmpty(getArgs(1))).to.be.false
}

function testArray(isEmpty) {
  expect(isEmpty([])).to.be.true
  expect(isEmpty([1])).to.be.false
}

function testMap(isEmpty) {
  expect(isEmpty(new Map())).to.be.true
  expect(isEmpty(new Map([['a', 1]]))).to.be.false
}

function testObject(isEmpty) {
  expect(isEmpty({})).to.be.true
  expect(isEmpty({ a: 1 })).to.be.false
}

function testSet(isEmpty) {
  expect(isEmpty(new Set())).to.be.true
  expect(isEmpty(new Set([1]))).to.be.false
}

function testString(isEmpty) {
  expect(isEmpty('')).to.be.true
  expect(isEmpty('a')).to.be.false
}
