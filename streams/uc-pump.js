var through = require('through2')
var pump = require('pump')
pump(
  process.stdin,
  through(write),
  process.stdout
)

function write (buf, enc, next) {
  next(null, buf.toString().toUpperCase())
}
