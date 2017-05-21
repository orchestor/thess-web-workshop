var net = require('net')
var fs = require('fs')
var log = fs.createWriteStream('log.txt')

var server = net.createServer(function (stream) {
  var client = net.connect(5000, 'localhost')
  client.pipe(stream).pipe(client)
  client.pipe(log, { end: false })
})
server.listen(5005)
