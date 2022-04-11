

// elements
const board = document.getElementById('board')
const txt = document.getElementById('input')
const send = document.getElementById('send')


const ws_host = location.origin.replace(/^http/, 'ws')
//const ws_host = 'ws://' + window.location.hostname + ':3000'
const socket = new WebSocket(ws_host)

socket.onmessage = ({ data }) => {
    board.innerHTML += `<div>User: ${data}</div>`
    console.log(data)
}

send.onclick = () => {
    socket.send(txt.value)
    txt.value = null
}