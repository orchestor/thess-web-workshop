var http = require('http')
var concat = require('concat-stream')
var qs = require('querystring')
var server = http.createServer(function (req, res) {
  req.pipe(concat(function (body) {
    var params = qs.parse(body.toString())
    console.log(params)
  }))
})
server.listen(5000)
