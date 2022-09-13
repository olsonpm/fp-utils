import { expect } from 'chai'

import mSetValueAtPathE from '#esm/m-set-value-at-path'
import mSetValueAtPathC from '#cjs/m-set-value-at-path'

suite('mSetValueAtPath', () => {
  test('array', () => {
    testArray(mSetValueAtPathE)
    testArray(mSetValueAtPathC)
  })

  test('map', () => {
    testMap(mSetValueAtPathE)
    testMap(mSetValueAtPathC)
  })

  test('object', () => {
    testObject(mSetValueAtPathE)
    testObject(mSetValueAtPathC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(mSetValueAtPath) {
  const arr = [0, { key: 1, value: 0 }]
  mSetValueAtPath([1, 'value'], 1)(arr)
  expect(arr).to.deep.equal([0, { key: 1, value: 1 }])
}

function testMap(mSetValueAtPath) {
  const aMap = new Map([['a', 0], ['b', { key: 'b', value: 0 }]])
  mSetValueAtPath(['b', 'value'], 1)(aMap)
  expect(aMap).to.deep.equal(
    new Map([
      ['a', 0],
      ['b', { key: 'b', value: 1 }],
    ])
  )
}

function testObject(mSetValueAtPath) {
  const obj = { a: 0, b: { key: 'b', value: 0 } }
  mSetValueAtPath(['b', 'value'], 1)(obj)
  expect(obj).to.deep.equal({ a: 0, b: { key: 'b', value: 1 } })
}
