var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var fs = require('fs')
var app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    //res.sendFile(path.join(__dirname + '/index.html'));
	res.sendFile(path.join(__dirname + '/public/UI/index.html'));
});

var server = app.listen(8337, function () {
   var host = server.address().address
   var port = server.address().port
   console.log("Server listening at host - " + host + ", port - " + port);
})
