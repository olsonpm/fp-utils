import { testExports } from './utils.mjs'

import rootIdxC from '#cjs/index'
import * as rootIdxE from '#esm/index'

test('exports', async () => {
  await Promise.all([testExports(rootIdxE), testExports(rootIdxC)])
})
