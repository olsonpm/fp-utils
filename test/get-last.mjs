import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import getLastE from '#esm/get-last'
import getLastC from '#cjs/get-last'

suite('getLast', () => {
  test('arguments', () => {
    testArguments(getLastE)
    testArguments(getLastC)
  })

  test('array', () => {
    testArray(getLastE)
    testArray(getLastC)
  })

  test('string', () => {
    testString(getLastE)
    testString(getLastC)
  })

  test('typedArray', () => {
    testTypedArray(getLastE)
    testTypedArray(getLastC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(getLast) {
  const prop2 = { prop: 2 }

  expect(getLast(getArgs(1, prop2))).to.equal(prop2)
}

function testArray(getLast) {
  const prop2 = { prop: 2 }

  expect(getLast([1, prop2])).to.equal(prop2)
}

function testString(getLast) {
  expect(getLast('ab')).to.equal('b')
}

function testTypedArray(getLast) {
  expect(getLast(Int8Array.of(1, 2))).to.equal(2)
}
