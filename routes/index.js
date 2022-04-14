// express router
const app = require('express').Router()

// base route
app.get('/', (_req, res) => {
    res.json({
        data: 'some Data for you  :) '
    })
})

// setting up io events
module.exports = (io) => {
    io.on('connection', (socket) => {
        
        // join a chat room
        socket.on('chat', () => {
            socket.emit('reply', "hi")
        })

        socket.on('sendData', data => {
            socket.broadcast.emit('getData', data)
        })

        // disconnect event
        socket.on("disconnecting", () => {
            //
        })
    })

    return app
}