var split = require('split2')
var through = require('through2')
var lines = 0

process.stdin
  .pipe(split())
  .pipe(through(write, end))
function write (buf, enc, next) {
  lines++
  next()
}
function end () {
  console.log(lines)
}
