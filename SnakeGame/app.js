var express = require('express');
var path = require('path');
var cors = require('cors');
var http = require('http');

var app = express();

// Enable cors
app.use(cors());

// Serve static files
app.use(express.static(path.join(__dirname)));

// Get port from environment and store in Express.
var port = (process.env.PORT || '3000');
app.set('port', port);

// Create HTTP server.Create HTTP server.
var server = http.createServer(app);

// Listen on provided port, on all network interfaces.
server.listen(port);