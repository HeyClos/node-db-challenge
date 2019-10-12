const express = require('express'); // importing a CommonJS module
const server = express();
const helmet = require('helmet');

const projectsRouter = require('./data/projects/projectsRouter');
//const resourcesRouter = require('');
//const tasksRouter = require('');

server.get('/', (req, res) => {
  res.send(`<h2>data persistence sprint challenge!</h2>`)
});


// set up global middleware
server.use('/projects', projectsRouter)
//server.use(logger);

module.exports = server;