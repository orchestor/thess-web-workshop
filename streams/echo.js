var net = require('net')
var server = net.createServer(function (stream) {
  // stream is a duplex stream
  stream.pipe(stream) // echo server
})
server.listen(5000)
