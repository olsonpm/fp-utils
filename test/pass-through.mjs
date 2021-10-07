import sinon from 'sinon'
import { expect } from 'chai'

import passThroughE from '#esm/pass-through'
import passThroughC from '#cjs/pass-through'

test('passThrough', () => {
  testPassThrough(passThroughE)
  testPassThrough(passThroughC)
})

//
//------------------//
// Helper Functions //
//------------------//

function testPassThrough(passThrough) {
  const inc = sinon.fake(n => n + 1),
    double = sinon.fake(n => n * 2),
    dec = sinon.fake(n => n - 1)

  expect(passThrough(0, [
    inc,
    double,
    inc,
    dec
  ])).to.equal(2)

  expect(inc.args).to.deep.equal([[0], [2]])
  expect(double.args).to.deep.equal([[1]])
  expect(dec.args).to.deep.equal([[3]])
}
