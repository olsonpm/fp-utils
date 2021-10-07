import sinon from 'sinon'
import { expect } from 'chai'

import logErrorE from '#esm/log-error'
import logErrorC from '#cjs/log-error'

test('logError', () => {
  testlogError(logErrorE)
  testlogError(logErrorC)
})

//
//------------------//
// Helper Functions //
//------------------//

function testlogError(logError) {
  const errorFake = sinon.fake()

  sinon.replace(console, 'error', errorFake)

  try {
    logError('abc')

    expect(errorFake.args[0][0]).to.equal('abc')
  } finally {
    sinon.restore()
  }
}
