import { fake, replace, restore } from 'sinon'
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
  const errorFake = fake()

  replace(console, 'error', errorFake)

  try {
    logError('abc')

    expect(errorFake.args[0][0]).to.equal('abc')
  } finally {
    restore()
  }
}
