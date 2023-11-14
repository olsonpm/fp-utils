import { expect } from 'chai'

import discardE from '#esm/discard'
import discardC from '#cjs/discard'

suite('discard', () => {
  test('array', () => {
    testArray(discardE)
    testArray(discardC)
  })

  test('map', () => {
    testMap(discardE)
    testMap(discardC)
  })

  test('object', () => {
    testObject(discardE)
    testObject(discardC)
  })

  test('set', () => {
    testSet(discardE)
    testSet(discardC)
  })

  test('typedArray', () => {
    testTypedArray(discardE)
    testTypedArray(discardC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(discard) {
  const arr = [1, 2, 3]

  expect(discard([])(arr)).to.deep.equal([1, 2, 3])
  expect(discard([1])(arr)).to.deep.equal([2, 3])
  expect(discard([1, 2])(arr)).to.deep.equal([3])
  expect(discard([4])(arr)).to.deep.equal([1, 2, 3])
}

function testMap(discard) {
  const map = new Map([['a', 1], ['b', 2], ['c', 3]])

  expect(discard([])(map)).to.deep.equal(new Map([['a', 1], ['b', 2], ['c', 3]]))
  expect(discard([1])(map)).to.deep.equal(new Map([['b', 2], ['c', 3]]))
  expect(discard([1, 2])(map)).to.deep.equal(new Map([['c', 3]]))
  expect(discard([4])(map)).to.deep.equal(new Map([['a', 1], ['b', 2], ['c', 3]]))
}

function testObject(discard) {
  const obj = { a: 1, b: 2, c: 3 }

  expect(discard([])(obj)).to.deep.equal({ a: 1, b: 2, c: 3 })
  expect(discard([1])(obj)).to.deep.equal({ b: 2, c: 3 })
  expect(discard([1, 2])(obj)).to.deep.equal({ c: 3 })
  expect(discard([4])(obj)).to.deep.equal({ a: 1, b: 2, c: 3 })
}

function testSet(discard) {
  const set = new Set([1, 2, 3])

  expect(discard([])(set)).to.deep.equal(new Set([1, 2, 3]))
  expect(discard([1])(set)).to.deep.equal(new Set([2, 3]))
  expect(discard([1, 2])(set)).to.deep.equal(new Set([3]))
  expect(discard([4])(set)).to.deep.equal(new Set([1, 2, 3]))
}

function testTypedArray(discard) {
  const arr = Int8Array.of(1, 2, 3)

  expect(discard([])(arr)).to.deep.equal(Int8Array.of(1, 2, 3))
  expect(discard([1])(arr)).to.deep.equal(Int8Array.of(2, 3))
  expect(discard([1, 2])(arr)).to.deep.equal(Int8Array.of(3))
  expect(discard([4])(arr)).to.deep.equal(Int8Array.of(1, 2, 3))
}
