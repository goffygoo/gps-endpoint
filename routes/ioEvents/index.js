const { SerialPort, ReadlineParser } = require('serialport')

// const port = new SerialPort({ path:'COM3', baudRate:115200 })
// const parser = port.pipe(new ReadlineParser())

module.exports = (io) => {
    io.on('connection', (socket) => {
        
        // join a chat room
        socket.on('chat', () => {
            socket.emit('reply', "hi")
        })

        parser.on('data', (...e) => {
            io.sockets.emit('newData', e)
        })

        // disconnect event
        socket.on("disconnecting", () => {
            //
        })
    })
}