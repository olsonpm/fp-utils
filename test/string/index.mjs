import { testExports } from '../utils.mjs'

import runAppendTests from './append.mjs'
import runEndsWithTests from './ends-with.mjs'
import runPrependTests from './prepend.mjs'
import runSplitOnTests from './split-on.mjs'
import runStartsWithTests from './starts-with.mjs'
import runTruncateToNLinesTests from './truncate-to-n-lines.mjs'
import runWrapInTests from './wrap-in.mjs'

import stringIdxC from '#cjs/string/index'
import * as stringIdxE from '#esm/string/index'

suite('string', () => {
  test('exports', async () => {
    await Promise.all([
      testExports(stringIdxC, 'string'),
      testExports(stringIdxE, 'string'),
    ])
  })

  runAppendTests()
  runEndsWithTests()
  runPrependTests()
  runSplitOnTests()
  runStartsWithTests()
  runTruncateToNLinesTests()
  runWrapInTests()
})
