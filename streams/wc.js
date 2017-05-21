var split = require('split2')
var to = require('to2')
var lines = 0

process.stdin
  .pipe(split())
  .pipe(to(write, end))

function write (buf, enc, next) {
  lines++
  next()
}
function end () {
  console.log(lines)
}
