import { expect } from 'chai'
import { getArgs } from './utils.mjs'

import getFirstE from '#esm/get-first'
import getFirstC from '#cjs/get-first'

suite('getFirst', () => {
  test('arguments', () => {
    testArguments(getFirstE)
    testArguments(getFirstC)
  })

  test('array', () => {
    testArray(getFirstE)
    testArray(getFirstC)
  })

  test('string', () => {
    testString(getFirstE)
    testString(getFirstC)
  })

  test('typedArray', () => {
    testTypedArray(getFirstE)
    testTypedArray(getFirstC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArguments(getFirst) {
  const prop1 = { prop: 1 }

  expect(getFirst(getArgs(prop1, 2))).to.equal(prop1)
}

function testArray(getFirst) {
  const prop1 = { prop: 1 }

  expect(getFirst([prop1, 2])).to.equal(prop1)
}

function testString(getFirst) {
  expect(getFirst('ab')).to.equal('a')
}

function testTypedArray(getFirst) {
  expect(getFirst(Int8Array.of(1, 2))).to.equal(1)
}
