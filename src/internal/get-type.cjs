const typeDetect = require('type-detect')

module.exports = something => typeDetect(something).toLowerCase()
