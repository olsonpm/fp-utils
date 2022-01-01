import { fake, replace, restore } from 'sinon'
import { expect } from 'chai'

import logE from '#esm/log'
import logC from '#cjs/log'

test('log', () => {
  testlog(logE)
  testlog(logC)
})

//
//------------------//
// Helper Functions //
//------------------//

function testlog(log) {
  const logFake = fake()

  replace(console, 'log', logFake)

  try {
    log('abc')

    expect(logFake.args[0][0]).to.equal('abc')
  } finally {
    restore()
  }
}
