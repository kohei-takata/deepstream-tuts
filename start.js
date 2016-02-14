const DeepstreamServer = require('deepstream.io');
const server =new DeepstreamServer();

server.set('host', 'localhost');
server.set('port', 6020);

server.start();