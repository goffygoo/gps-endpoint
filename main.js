// config env vars
require('dotenv').config()

// the express app with cors enabled
const app = require('express')();
const cors = require('cors');
app.use(cors())
const http = require('http').Server(app);

// the origin is the url from where we accept the requests
const io = require('socket.io')(http, {
    cors: {
        origin: ['http://localhost:3000', 'http://127.0.0.1:5500'],
        methods: ["GET", "POST", "PUT", "DELETE", "HEAD", "PATCH", "CONNECT", "OPTIONS", "TRACE", "PATCH"]
    }
});

// importing routes
const routes = require('./routes');
app.use('/', routes(io))

http.listen(process.env.PORT, () => {
  console.log(`Listening on *${process.env.PORT}:...`);
});