import { expect } from 'chai'

import pickE from '#esm/pick'
import pickC from '#cjs/pick'

suite('pick', () => {
  test('array', () => {
    testArray(pickE)
    testArray(pickC)
  })

  test('map', () => {
    testMap(pickE)
    testMap(pickC)
  })

  test('object', () => {
    testObject(pickE)
    testObject(pickC)
  })

  test('set', () => {
    testSet(pickE)
    testSet(pickC)
  })

  test('typedArray', () => {
    testTypedArray(pickE)
    testTypedArray(pickC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(pick) {
  const arr = [1, 2, 3]

  expect(pick([])(arr)).to.deep.equal([])
  expect(pick([0])(arr)).to.deep.equal([1])
  expect(pick([0, 1])(arr)).to.deep.equal([1, 2])
  expect(pick([3])(arr)).to.deep.equal([])
}

function testMap(pick) {
  const map = new Map([['a', 1], ['b', 2], ['c', 3]])

  expect(pick([])(map)).to.deep.equal(new Map([]))
  expect(pick(['a'])(map)).to.deep.equal(new Map([['a', 1]]))
  expect(pick(['a', 'b'])(map)).to.deep.equal(new Map([['a', 1], ['b', 2]]))
  expect(pick(['d'])(map)).to.deep.equal(new Map([]))
}

function testObject(pick) {
  const obj = { a: 1, b: 2, c: 3 }

  expect(pick([])(obj)).to.deep.equal({})
  expect(pick(['a'])(obj)).to.deep.equal({ a: 1, })
  expect(pick(['a', 'b'])(obj)).to.deep.equal({ a: 1, b: 2 })
  expect(pick(['d'])(obj)).to.deep.equal({})
}

function testSet(pick) {
  const set = new Set([1, 2, 3])

  expect(pick([])(set)).to.deep.equal(new Set([]))
  expect(pick([1])(set)).to.deep.equal(new Set([1]))
  expect(pick([1, 2])(set)).to.deep.equal(new Set([1, 2]))
  expect(pick([4])(set)).to.deep.equal(new Set([]))
}

function testTypedArray(pick) {
  const arr = Int8Array.of(1, 2, 3)

  expect(pick([])(arr)).to.deep.equal(Int8Array.of())
  expect(pick([0])(arr)).to.deep.equal(Int8Array.of(1))
  expect(pick([0, 1])(arr)).to.deep.equal(Int8Array.of(1, 2))
  expect(pick([3])(arr)).to.deep.equal(Int8Array.of())
}
