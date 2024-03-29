import { expect } from 'chai'

import mSetValueAtE from '#esm/m-set-value-at'
import mSetValueAtC from '#cjs/m-set-value-at'

suite('mSetValueAt', () => {
  test('array', () => {
    testArray(mSetValueAtE)
    testArray(mSetValueAtC)
  })

  test('map', () => {
    testMap(mSetValueAtE)
    testMap(mSetValueAtC)
  })

  test('object', () => {
    testObject(mSetValueAtE)
    testObject(mSetValueAtC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(mSetValueAt) {
  const arr = [1]
  mSetValueAt(1, 2)(arr)
  expect(arr).to.deep.equal([1, 2])
}

function testMap(mSetValueAt) {
  const aMap = new Map([['a', 1]])
  mSetValueAt('b', 2)(aMap)
  expect(aMap).to.deep.equal(
    new Map([
      ['a', 1],
      ['b', 2],
    ])
  )
}

function testObject(mSetValueAt) {
  const obj = { a: 1 }
  mSetValueAt('b', 2)(obj)
  expect(obj).to.deep.equal({ a: 1, b: 2 })
}
