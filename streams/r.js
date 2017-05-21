var fs = require('fs')
var r = fs.createReadStream('hello.txt')
//var w = fs.createWritableStream('copy.txt')
r.pipe(process.stdout)
