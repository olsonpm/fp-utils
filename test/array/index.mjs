import { testExports } from '../utils.mjs'

import runAppendAllTests from './append-all.mjs'
import runMAppendAllTests from './m-append-all.mjs'
import runMAppendTests from './m-append.mjs'
import runSplitEveryTests from './split-every.mjs'

import arrayIdxC from '#cjs/array/index'
import * as arrayIdxE from '#esm/array/index'

suite('array', () => {
  test('exports', async () => {
    await Promise.all([testExports(arrayIdxE, 'array'), testExports(arrayIdxC, 'array')])
  })

  runAppendAllTests()
  runMAppendAllTests()
  runMAppendTests()
  runSplitEveryTests()
})
