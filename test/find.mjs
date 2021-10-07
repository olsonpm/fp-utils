import { expect } from 'chai'

import findE from '#esm/find'
import findC from '#cjs/find'

suite('find', () => {
  test('array', () => {
    testArray(findE)
    testArray(findC)
  })

  test('typedArray', () => {
    testTypedArray(findE)
    testTypedArray(findC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testArray(find) {
  const prop4 = { prop: 4 }

  expect(find(propGt3)([{ prop: 1 }, { prop: 2 }])).to.equal(undefined)
  expect(find(propGt3)([{ prop: 1 }, prop4])).to.equal(prop4)

  // helper fns
  function propGt3(obj) {
    return obj.prop > 3
  }
}

function testTypedArray(find) {
  expect(find(gt3)(Int8Array.of(1, 2))).to.equal(undefined)
  expect(find(gt3)(Int8Array.of(1, 4))).to.equal(4)

  // helper fns
  function gt3(n) {
    return n > 3
  }
}
