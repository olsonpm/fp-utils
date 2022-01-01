import { fake } from 'sinon'
import { expect } from 'chai'

import tapE from '#esm/tap'
import tapC from '#cjs/tap'

test('tap', () => {
  testTap(tapE)
  testTap(tapC)
})

//
//------------------//
// Helper Functions //
//------------------//

function testTap(tap) {
  const inc = fake(n => n + 1)

  expect(tap(inc)(1)).to.equal(1)

  expect(inc.args).to.deep.equal([[1]])
}
