import tedent from '@olsonpm/tedent'
import { expect } from 'chai'

import jstringE from '#esm/jstring'
import jstringC from '#cjs/jstring'

suite('jstring', () => {
  test('json stringify', () => {
    testJsonStringify(jstringE)
    testJsonStringify(jstringC)
  })

  test('function value', () => {
    testFunctionValue(jstringE)
    testFunctionValue(jstringC)
  })

  test('duplicate values', () => {
    testDuplicateValues(jstringE)
    testDuplicateValues(jstringC)
  })
})

//
//------------------//
// Helper Functions //
//------------------//

function testJsonStringify(jstring) {
  const complexObj = { parent: { child: [1, null, 'abc'] }, prop: 8 }

  expect(jstring(complexObj)).to.equal(JSON.stringify(complexObj, null, 2))
}

function testFunctionValue(jstring) {
  const obj = { fn: () => {} }

  expect(jstring(obj)).to.equal(tedent(`
    {
      "fn": "<function>"
    }
  `))
}

function testDuplicateValues(jstring) {
  const dupe = { x: 2 },
    obj = { a: { b: dupe }, c: 3, d: dupe }

  expect(jstring(obj)).to.equal(tedent(`
    {
      "a": {
        "b": {
          "x": 2
        }
      },
      "c": 3,
      "d": "<duplicate of 'b'>"
    }
  `))
}
