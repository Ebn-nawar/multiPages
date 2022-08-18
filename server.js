var StaticServer = require('static-server');
var server = new StaticServer({
  rootPath: './dist',
  port: 8080,
});

server.start(function () {
    console.log(`http://localhost:${server.port}`);
});