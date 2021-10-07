import { expect } from 'chai'

import getValueAtE from '#esm/get-value-at'
import getValueAtC from '#cjs/get-value-at'

suite('getValueAt', () => {
  test('map', () => {
    testMap(getValueAtE)
    testMap(getValueAtC)
  })

  test('object', () => {
    testObject(getValueAtE)
    testObject(getValueAtC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testObject(getValueAt) {
  expect(getValueAt('prop')({ prop: 1 })).to.equal(1)
  expect(getValueAt('length')('abc')).to.equal(3)
  expect(getValueAt('abc')({})).to.equal(undefined)
}

function testMap(getValueAt) {
  expect(getValueAt('a')(new Map([['a', 1]]))).to.equal(1)
}
