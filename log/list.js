var level = require('level')
var hyperlog = require('hyperlog')
var db = level('log.db')
var log = hyperlog(db, { valueEncoding: 'json' })
var to = require('to2')

//log.createReadStream({ live: true }) // stream stays open
log.createReadStream()
  .pipe(to.obj(function (row, enc, next) {
    console.log(row)
    next()
  }))
