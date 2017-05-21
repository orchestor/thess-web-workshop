var html = require('yo-yo')
var to = require('to2')
var split = require('split2')
var wswarm = require('webrtc-swarm')
var signalhub = require('signalhub')
var sw = wswarm(signalhub('chatswarm',['https://signalhub.mafintosh.com/']))
var peers = []
var onend = require('end-of-stream')
sw.on('peer', function (peer, id) {
  console.log('PEER',id)
  peers.push(peer)
  onend(peer, function () {
    var ix = peers.indexOf(peer)
    peers.splice(ix,1)
  })
  peer.pipe(split()).pipe(to(function (buf, enc, next) {
    state.messages.push(buf.toString())
    update()
    next()
  }))
})

var state = { messages: [] }
var root = document.body.appendChild(document.createElement('div'))
update()

function update () {
  html.update(root, html`<div>
    <h1>p2p chat</h1>
    <form onsubmit=${onsubmit}>
      <input type="text" name="msg">
      <button type="submit">post</button>
    </form>
    ${state.messages.map(function (msg) {
      return html`<div>${msg}</div>`
    })}
  </div>`)
  function onsubmit (ev) {
    ev.preventDefault()
    var msg = this.elements.msg.value
    peers.forEach(function (peer) {
      peer.write(msg + '\n')
    })
    this.reset()
  }
}
