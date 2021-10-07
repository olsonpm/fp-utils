import { basename, dirname } from 'path'
import { camelCase, kebabCase } from 'lodash-es'
import { readdirSync } from 'fs'
import tedent from '@olsonpm/tedent'

const helpers = {
  esm: getEsmHelpers(),
  cjs: getCjsHelpers(),
}

function registerHelpers(hbs, moduleType) {
  for (const [name, fn] of Object.entries(helpers[moduleType])) {
    hbs.registerHelper(name, fn)
  }
}

//
//------------------//
// Helper Functions //
//------------------//

function getEsmHelpers() {
  return {
    export: ctx => {
      const fname = basename(ctx.data.root.fpath, '.js')

      return `export default ${camelCase(fname)}`
    },
    exportDir: ctx => {
      const dname = dirname(ctx.data.root.fpath)

      return readdirSync(dname)
        .filter(fname => fname.endsWith('.js') && fname !== 'index.js')
        .map(fname => {
          fname = basename(fname, '.js')
          const varName = camelCase(fname)
          return `export { default as ${varName} } from './${fname}.mjs'`
        })
        .join('\n')
    },
    exportInline: () => 'export default',
    exportNamedAlias: (varName, alias) => {
      return `export { ${varName} as ${alias} }`
    },
    import: (varName, path) => {
      return typeof path === 'string'
        ? `import ${varName} from '${path}/${kebabCase(varName)}.mjs'`
        : `import ${varName} from './${kebabCase(varName)}.mjs'`
    },
    importAs: (varName, moduleName) => {
      const ext = moduleName.startsWith('.')
        ? '.mjs'
        : ''

      return `import ${varName} from '${moduleName + ext}'`
    },
    importDep: varName => {
      return `import ${varName} from '${kebabCase(varName)}'`
    },
    importNamed: (varNames, moduleName) => {
      const ext = moduleName.startsWith('.')
        ? '.mjs'
        : ''

      return `import { ${varNames} } from '${moduleName + ext}'`
    },
  }
}

function getCjsHelpers() {
  return {
    export: ctx => {
      const fname = basename(ctx.data.root.fpath, '.js')

      return `module.exports = ${camelCase(fname)}`
    },
    exportDir: ctx => {
      const dname = dirname(ctx.data.root.fpath)

      const exportLines = readdirSync(dname)
        .filter(fname => fname.endsWith('.js') && fname !== 'index.js')
        .map(fname => {
          fname = basename(fname, '.js')
          const varName = camelCase(fname)
          return `\n  ${varName}: require('./${fname}.cjs'),`
        })
        .join('')

      return tedent(`
        module.exports = {${exportLines}
        }
      `)
    },
    exportInline: () => 'module.exports =',
    exportNamedAlias: (varName, alias) => {
      return `module.exports.${alias} = ${varName}`
    },
    import: (varName, path) => {
      return typeof path === 'string'
        ? `const ${varName} = require('${path}/${kebabCase(varName)}.cjs')`
        : `const ${varName} = require('./${kebabCase(varName)}.cjs')`
    },
    importAs: (varName, moduleName) => {
      const ext = moduleName.startsWith('.')
        ? '.mjs'
        : ''

      return `const ${varName} = require('${moduleName + ext}')`
    },
    importDep: varName => {
      return `const ${varName} = require('${kebabCase(varName)}')`
    },
    importNamed: (varNames, moduleName) => {
      const ext = moduleName.startsWith('.')
        ? '.cjs'
        : ''

      return `const { ${varNames} } = require('${moduleName + ext}')`
    },
  }
}

//
//---------//
// Exports //
//---------//

export default registerHelpers
