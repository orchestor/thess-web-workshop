var level = require('level')
var hyperlog = require('hyperlog')
var db = level('log.db')
var log = hyperlog(db, { valueEncoding: 'json' })
var timedb = level('time.db')
require('./timeview.js')({ db: timedb, log: log })
module.exports = log
log.timedb = timedb
