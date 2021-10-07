const getValueAt = require('../internal/get-value-at.cjs')

module.exports = key => something => getValueAt(key, something, true)
