import mSetValueAt from '../internal/m-set-value-at.mjs'

export default (key, val) => something => mSetValueAt(something, key, val, true)
