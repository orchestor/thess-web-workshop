// wsnc ws://localhost:5000
// node server.js

var http = require('http')
var server = http.createServer(function (req, res) {
  res.end('whatever\n')
})
server.listen(5000)

var to = require('to2')
var split = require('split2')
var wsock = require('websocket-stream')
var onend = require('end-of-stream')
var streams = []
wsock.createServer({ server: server }, function (stream) {
  streams.push(stream)
  onend(stream, function () {
    var ix = streams.indexOf(stream)
    streams.splice(ix,1)
  })
  stream.pipe(split()).pipe(to(function (buf, enc, next) {
    var line = buf.toString()
    streams.forEach(function (s) {
      s.write(line + '\n')
    })
    next()
  }))
})
