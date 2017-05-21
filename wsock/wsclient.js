var wsock = require('websocket-stream')
var stream = wsock(process.argv[2])
process.stdin.pipe(stream).pipe(process.stdout)
