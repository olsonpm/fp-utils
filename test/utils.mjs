import fs from 'fs/promises'
import path from 'path'
import { camelCase } from 'lodash-es'
import { expect } from 'chai'
import { fileURLToPath } from 'url'

function getArgs() {
  return arguments
}

async function testExports(idxExports, dirName = '') {
  const exportedFns = Object.values(idxExports),
    exportedFnNames = Object.keys(idxExports).sort()

  for (const fn of exportedFns) {
    expect(fn).to.be.a('function')
  }

  const testDir = path.dirname(fileURLToPath(import.meta.url))

  const expectedFnNames = (await fs.readdir(path.resolve(testDir, `../tpl/lib/${dirName}`)))
    .filter(fname => fname !== 'index.js' && fname.endsWith('.js'))
    .map(fname => camelCase(path.basename(fname, '.js')))
    .sort()

  expect(exportedFnNames).to.deep.equal(expectedFnNames)
}

export { getArgs, testExports }
