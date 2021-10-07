import { testExports } from '../utils.mjs'

import runIsAfterTests from './is-after.mjs'
import runIsBeforeTests from './is-before.mjs'
import runIsBetweenTests from './is-between.mjs'

import dateIdxC from '#cjs/date/index'
import * as dateIdxE from '#esm/date/index'

suite('date', () => {
  test('exports', async () => {
    await Promise.all([testExports(dateIdxC, 'date'), testExports(dateIdxE, 'date')])
  })

  runIsAfterTests()
  runIsBeforeTests()
  runIsBetweenTests()
})
