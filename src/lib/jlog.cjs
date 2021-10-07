const jstring = require('./jstring.cjs')
const log = require('./log.cjs')

module.exports = something => log(jstring(something))
