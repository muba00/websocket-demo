

// elements
const board = document.getElementById('board')
const txt = document.getElementById('input')
const send = document.getElementById('send')



const socket = new WebSocket("ws://localhost:8080")

socket.onmessage = ({ data }) => {
    board.innerHTML += `<div>User: ${data}</div>`
    console.log(data)
}

send.onclick = () => {
    socket.send(txt.value)
    txt.value = null
}