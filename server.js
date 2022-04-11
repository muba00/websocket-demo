
const express = require('express')
const path = require('path')
const http = require('http')
const WebSocket = require('ws')
const PORT = process.env.PORT || 3000



// Express Server
const app = express()

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'))
})

app.get('/app.js', (req, res) => {
    res.sendFile(path.join(__dirname, '/js/app.js'))
})

const server = http.createServer(app)
server.listen(PORT, () => console.log(`Listening on ${PORT}`))






// Websocket Server
const wss_server = new WebSocket.Server({ server })

const broadcast = (wss_server, message) => {
    wss_server.clients.forEach((client) => {
        if (client.readyState == WebSocket.OPEN) {
            client.send(String(message))
        }
    })
}

wss_server.on("connection", socket => {
    socket.on("message", (message) => {
        broadcast(wss_server, message)
    })
})