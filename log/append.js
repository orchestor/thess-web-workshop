var level = require('level')
var hyperlog = require('hyperlog')
var db = level('log.db')
var log = hyperlog(db, { valueEncoding: 'json' })

var doc = {
  time: new Date().toISOString(),
  msg: process.argv[2]
}
log.append(doc, function (err, node) {
  if (err) console.error(err)
  else console.log(node)
})
