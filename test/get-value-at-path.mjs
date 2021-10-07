import { expect } from 'chai'

import getValueAtPathE from '#esm/get-value-at-path'
import getValueAtPathC from '#cjs/get-value-at-path'

suite('getValueAtPath', () => {
  test('map', () => {
    testMap(getValueAtPathE)
    testMap(getValueAtPathC)
  })

  test('object', () => {
    testObject(getValueAtPathE)
    testObject(getValueAtPathC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testMap(getValueAtPath) {
  const parent = {}
  let aMap = new Map([
    [parent, new Map([['child', 1]])]
  ])
  expect(getValueAtPath([parent, 'child'])(aMap)).to.equal(1)

  aMap = new Map([['a', 1]])
  expect(getValueAtPath(['a', 'toString'])(aMap)).to.be.a('function')

  aMap = new Map()
  expect(getValueAtPath(['abc', 'def'])(aMap)).to.equal(undefined)
  expect(getValueAtPath([])(aMap)).to.equal(aMap)
}

function testObject(getValueAtPath) {
  expect(getValueAtPath(['parent', 'child'])({ parent: { child: 1 }})).to.equal(1)
  expect(getValueAtPath(['length', 'toString'])('abc')).to.be.a('function')
  expect(getValueAtPath(['abc', 'def'])({})).to.equal(undefined)

  const obj = {}
  expect(getValueAtPath([])(obj)).to.equal(obj)
}
