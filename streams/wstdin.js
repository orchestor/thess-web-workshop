var fs = require('fs')
var w = fs.createWriteStream('hello.txt')
w.on('finish', function () {
  console.log('FINISHED')
})
process.stdin.pipe(w)
