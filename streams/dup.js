var duplexify = require('duplexify')
var mkdirp = require('mkdirp')
var fs = require('fs')

module.exports = function () {
  var dup = duplexify()
  mkdirp('/tmp/whatever', function (err) {
    dup.setWritable(fs.createWriteStream('/tmp/whatever/log.txt'))
  })
  return dup
}
