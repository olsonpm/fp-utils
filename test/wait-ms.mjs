import { expect } from 'chai'

import waitMsE from '#esm/wait-ms'
import waitMsC from '#cjs/wait-ms'

test('waitMs', async () => {
  await Promise.all([testWaitMs(waitMsE), testWaitMs(waitMsC)])
})

//
//------------------//
// Helper Functions //
//------------------//

async function testWaitMs(waitMs) {
  const now = new Date()

  await waitMs(10)

  expect(new Date() - now).to.be.closeTo(10, 2)
}
