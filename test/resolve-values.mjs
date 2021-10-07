import { expect } from 'chai'

import resolveValuesE from '#esm/resolve-values'
import resolveValuesC from '#cjs/resolve-values'

suite('resolveValues', () => {
  test('map', async () =>
    Promise.all([testMap(resolveValuesE), testMap(resolveValuesC)]))

  test('object', async () =>
    Promise.all([testObject(resolveValuesE), testObject(resolveValuesC)]))
})

//
//------------------//
// Helper Functions //
//------------------//

async function testMap(resolveValues) {
  const result = await resolveValues(
    new Map([
      ['a', Promise.resolve(1)],
      ['b', Promise.resolve(2)],
    ])
  )

  expect(result).to.deep.equal(
    new Map([
      ['a', 1],
      ['b', 2],
    ])
  )
}

async function testObject(resolveValues) {
  expect(
    await resolveValues({
      a: Promise.resolve(1),
      b: Promise.resolve(2),
    })
  ).to.deep.equal({ a: 1, b: 2 })
}
