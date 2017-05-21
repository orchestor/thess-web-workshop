var blobs = require('content-addressable-blob-store')
// to use in the browser: require('idb-content-addressable-blob-store')
var store = blobs('cool.blobs')
var level = require('level')
var db = level('cool.db')

if (process.argv[2] === 'write') {
  var w = store.createWriteStream(function () {
    var doc = {
      time: new Date().toISOString()
    }
    db.put('image!' + w.key, doc, function (err) {
      if (err) console.error(err)
      else console.log(w.key)
    })
  })
  process.stdin.pipe(w)
} else if (process.argv[2] === 'read') {
  var hash = process.argv[3]
  var r = store.createReadStream(hash)
  r.pipe(process.stdout)
}
