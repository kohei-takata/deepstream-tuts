const DeepstreamServer = require('deepstream.io');
const server =new DeepstreamServer();

server.set('host', 'localhost');
server.set('port', 6020);

server.set('permissionHandler', {
   isValidUser: function(connectionData, authData, callback) {
       if( authData.user === 'kohei' && authData.password === 'password' ) {
           callback( null, authData.user );
       } else {
           callback( 'invalid credentials' );
       }
    },
    canPerformAction: function(username, message, callback) {
        callback(null, true);
    },
    onClientDisconnect: function(username) {}
});

server.start();