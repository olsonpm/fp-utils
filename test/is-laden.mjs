import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import isLadenE from '#esm/is-laden'
import isLadenC from '#cjs/is-laden'

suite('isLaden', () => {
  test('arguments', () => {
    testArguments(isLadenE)
    testArguments(isLadenC)
  })

  test('array', () => {
    testArray(isLadenE)
    testArray(isLadenC)
  })

  test('map', () => {
    testMap(isLadenE)
    testMap(isLadenC)
  })

  test('null', () => {
    expect(isLadenE(null)).to.be.false
    expect(isLadenC(null)).to.be.false
  })

  test('object', () => {
    testObject(isLadenE)
    testObject(isLadenC)
  })

  test('set', () => {
    testSet(isLadenE)
    testSet(isLadenC)
  })

  test('string', () => {
    testString(isLadenE)
    testString(isLadenC)
  })

  test('undefined', () => {
    expect(isLadenE(undefined)).to.be.false
    expect(isLadenC(undefined)).to.be.false
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(isLaden) {
  expect(isLaden(getArgs(1))).to.be.true
  expect(isLaden(getArgs())).to.be.false
}

function testArray(isLaden) {
  expect(isLaden([1])).to.be.true
  expect(isLaden([])).to.be.false
}

function testMap(isLaden) {
  expect(isLaden(new Map([['a', 1]]))).to.be.true
  expect(isLaden(new Map())).to.be.false
}

function testObject(isLaden) {
  expect(isLaden({ a: 1 })).to.be.true
  expect(isLaden({})).to.be.false
}

function testSet(isLaden) {
  expect(isLaden(new Set([1]))).to.be.true
  expect(isLaden(new Set())).to.be.false
}

function testString(isLaden) {
  expect(isLaden('a')).to.be.true
  expect(isLaden('')).to.be.false
}
