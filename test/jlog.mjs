import { fake, replace, restore } from 'sinon'
import tedent from '@olsonpm/tedent'
import { expect } from 'chai'

import jlogE from '#esm/jlog'
import jlogC from '#cjs/jlog'

test('jlog', () => {
  testJlog(jlogE)
  testJlog(jlogC)
})

//
//------------------//
// Helper Functions //
//------------------//

function testJlog(jlog) {
  const logFake = fake()

  replace(console, 'log', logFake)

  try {
    jlog({ a: 1 })

    expect(logFake.args[0][0]).to.equal(tedent(`
      {
        "a": 1
      }
    `))
  } finally {
    restore()
  }
}
