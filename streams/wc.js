var split = require('split2')
var to = require('to2')
var pump = require('pump')
var lines = 0

pump(
  process.stdin,
  split(),
  to(write, end),
  function (err) {
    
  }
)

function write (buf, enc, next) {
  lines++
  next()
}
function end () {
  console.log(lines)
}
