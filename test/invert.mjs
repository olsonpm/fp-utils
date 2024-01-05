import { expect } from 'chai'

import invertE from '#esm/invert'
import invertC from '#cjs/invert'

suite('mapValues', () => {
  test('map', () => {
    testMap(invertE)
    testMap(invertC)
  })

  test('object', () => {
    testObject(invertE)
    testObject(invertC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testMap(invert) {
  const aMap = new Map([['a', 1], ['b', 2], ['c', 3]])

  expect(invert(aMap)).to.deep.equal(new Map([[1, 'a'], [2, 'b'], [3, 'c']]))
}

function testObject(invert) {
  const obj = { a: 1, b: 2, c: 3 }

  expect(invert(obj)).to.deep.equal({ 1: 'a', 2: 'b', 3: 'c' })
}

