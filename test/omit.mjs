import { expect } from 'chai'

import omitE from '#esm/omit'
import omitC from '#cjs/omit'

suite('omit', () => {
  test('array', () => {
    testArray(omitE)
    testArray(omitC)
  })

  test('map', () => {
    testMap(omitE)
    testMap(omitC)
  })

  test('object', () => {
    testObject(omitE)
    testObject(omitC)
  })

  test('set', () => {
    testSet(omitE)
    testSet(omitC)
  })

  test('typedArray', () => {
    testTypedArray(omitE)
    testTypedArray(omitC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(omit) {
  const arr = [1, 2, 3]

  expect(omit([])(arr)).to.deep.equal([1, 2, 3])
  expect(omit([0])(arr)).to.deep.equal([2, 3])
  expect(omit([0, 1])(arr)).to.deep.equal([3])
  expect(omit([3])(arr)).to.deep.equal([1, 2, 3])
}

function testMap(omit) {
  const map = new Map([['a', 1], ['b', 2], ['c', 3]])

  expect(omit([])(map)).to.deep.equal(new Map([['a', 1], ['b', 2], ['c', 3]]))
  expect(omit(['a'])(map)).to.deep.equal(new Map([['b', 2], ['c', 3]]))
  expect(omit(['a', 'b'])(map)).to.deep.equal(new Map([['c', 3]]))
  expect(omit(['d'])(map)).to.deep.equal(new Map([['a', 1], ['b', 2], ['c', 3]]))
}

function testObject(omit) {
  const obj = { a: 1, b: 2, c: 3 }

  expect(omit([])(obj)).to.deep.equal({ a: 1, b: 2, c: 3 })
  expect(omit(['a'])(obj)).to.deep.equal({ b: 2, c: 3 })
  expect(omit(['a', 'b'])(obj)).to.deep.equal({ c: 3 })
  expect(omit(['d'])(obj)).to.deep.equal({ a: 1, b: 2, c: 3 })
}

function testSet(omit) {
  const set = new Set([1, 2, 3])

  expect(omit([])(set)).to.deep.equal(new Set([1, 2, 3]))
  expect(omit([1])(set)).to.deep.equal(new Set([2, 3]))
  expect(omit([1, 2])(set)).to.deep.equal(new Set([3]))
  expect(omit([4])(set)).to.deep.equal(new Set([1, 2, 3]))
}

function testTypedArray(omit) {
  const arr = Int8Array.of(1, 2, 3)

  expect(omit([])(arr)).to.deep.equal(Int8Array.of(1, 2, 3))
  expect(omit([0])(arr)).to.deep.equal(Int8Array.of(2, 3))
  expect(omit([0, 1])(arr)).to.deep.equal(Int8Array.of(3))
  expect(omit([3])(arr)).to.deep.equal(Int8Array.of(1, 2, 3))
}
