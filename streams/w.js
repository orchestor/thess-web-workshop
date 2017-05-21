var fs = require('fs')
var w = fs.createWriteStream('hello.txt')
w.on('finish', function () {
  console.log('FINISHED')
})

w.write('one\n')
w.write('two\n')
w.end('THREE\n')
console.log('ENDED')
