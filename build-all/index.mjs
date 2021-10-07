import del from 'del'
import hbs from 'handlebars'
import makeDir from 'make-dir'
import path from 'path'
import registerHelpers from './register-helpers.mjs'
import { readdir, readFile, writeFile } from 'fs/promises'
import { fileURLToPath } from 'url'

const dirname = path.dirname(fileURLToPath(import.meta.url))

buildAll()

async function buildAll() {
  try {
    const esmHbs = hbs.create(),
      cjsHbs = hbs.create()

    registerHelpers(esmHbs, 'esm')
    registerHelpers(cjsHbs, 'cjs')

    const dir = getDirs()

    await del(dir.src)

    await Promise.all([
      build(dir.tpl, dir.src, '.mjs', esmHbs),
      build(dir.tpl, dir.src, '.cjs', cjsHbs),
    ])

    // eslint-disable-next-line no-console
    console.log('donezo !')
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err)
  }
}

//
//------------------//
// Helper Functions //
//------------------//

async function build(dirFrom, dirTo, ext, hbsInst) {
  await makeDir(dirTo)

  const fnames = await readdir(dirFrom)

  const writeFilesInDir = fnames.filter(f => f.endsWith('.js'))
    .map(async f => {
      let fromFPath
      try {
        fromFPath = path.resolve(dirFrom, f)

        const toFPath = path.resolve(
            dirTo,
            path.basename(path.resolve(dirTo, f), '.js') + ext
          ),
          fromContent = await readFile(fromFPath, 'utf8')

        const tpl = hbsInst.compile(fromContent),
          toContent = tpl({ fpath: fromFPath })

        await writeFile(toFPath, toContent)
      } catch (err) {
        err.message = `error compiling ${fromFPath}\n${err.message}`
        throw err
      }
    })

  await Promise.all(writeFilesInDir)

  const dirNames = fnames.filter(f => !f.endsWith('.js'))

  for (const d of dirNames) {
    const newDirFrom = path.resolve(dirFrom, d),
      newDirTo = path.resolve(dirTo, d)

    await build(newDirFrom, newDirTo, ext, hbsInst)
  }
}

function getDirs() {
  const root = path.resolve(dirname, '..')

  return {
    src: path.resolve(root, 'src'),
    tpl: path.resolve(root, 'tpl'),
  }
}
