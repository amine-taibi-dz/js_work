var http = require('http');
var querystring = require('querystring');
var util = require('util');
var port = process.env.PORT || 1337;
var server = http.createServer(function (req, res) {
    console.log(req.url, " ", req.param);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
});

var u = querystring.parse("q=145&lang=fr")
console.log(u);
server.listen(port, function () {
    console.log('Server is running at %s:%s ',
        server.address().address, server.address().port);
});