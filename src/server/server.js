var staticServer = require('node-static');
var host = process.env.PORT ? '0.0.0.0' : '127.0.0.1';
var port = process.env.PORT || 8080;

var fileServer = new staticServer.Server(__dirname + '/public/');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(port, host, function() {
  console.log('Running react-responsive-viewer ' + host + ':' + port);
});
