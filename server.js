
const WebSocket = require('ws')

const server = new WebSocket.Server({ port: 8080 })

const broadcast = (server, message) => {
    server.clients.forEach((client) => {
        if (client.readyState == WebSocket.OPEN) {
            client.send(String(message))
        }
    })
}

server.on("connection", socket => {
    socket.on("message", (message) => {
        broadcast(server, message)
    })
})