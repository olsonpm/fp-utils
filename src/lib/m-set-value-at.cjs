const mSetValueAt = require('../internal/m-set-value-at.cjs')

module.exports = (key, val) => something => mSetValueAt(something, key, val, true)
