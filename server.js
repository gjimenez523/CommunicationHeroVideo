var static = require('node-static');
var http = require('http');
var port = process.env.port || 2013;
var file = new(static.Server)();
var app = http.createServer(function (req, res) {
  file.serve(req, res);
}).listen(port);