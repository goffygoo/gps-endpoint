// express router
const app = require('express').Router()

// io events
// return value -> void
const ioevents = require('./ioEvents') 

// base route
app.use('/', (_req, res) => {
    res.json({
        data: 'some Data for you  :) '
    })
})

// setting up io events
module.exports = (io) => {
    ioevents(io)

    return app
}