const express = require('express')

//import routers
const projectRouter = require('./api/helpers/project/projectRouter')

//server init
const server = express();

server.use(express.json())

// use routers
server.use('/projects', projectRouter)

// root msg
server.get('/', (req, res) => {
  res.status(200).json('server listening...')
})

module.exports = server