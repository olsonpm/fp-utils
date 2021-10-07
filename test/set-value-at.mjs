import { expect } from 'chai'

import setValueAtE from '#esm/set-value-at'
import setValueAtC from '#cjs/set-value-at'

suite('setValueAt', () => {
  test('array', () => {
    testArray(setValueAtE)
    testArray(setValueAtC)
  })

  test('map', () => {
    testMap(setValueAtE)
    testMap(setValueAtC)
  })

  test('object', () => {
    testObject(setValueAtE)
    testObject(setValueAtC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(setValueAt) {
  expect(setValueAt(1, 2)([1])).to.deep.equal([1, 2])
}

function testMap(setValueAt) {
  expect(setValueAt('b', 2)(new Map([['a', 1]]))).to.deep.equal(
    new Map([
      ['a', 1],
      ['b', 2],
    ])
  )
}

function testObject(setValueAt) {
  expect(setValueAt('b', 2)({ a: 1 })).to.deep.equal({ a: 1, b: 2 })
}
