const express = require('express')

//import routers
const projectRouter = require('../helpers/project/projectRouters');
const resourceRouter = require('../helpers/resource/resourceRouters');

//server init
const server = express();

server.use(express.json())

// use routers
server.use('/api/projects', projectRouter);
server.use('/api/resources', resourceRouter);

// root msg
server.get('/', (req, res) => {
  res.status(200).json('server listening...')
})

module.exports = server