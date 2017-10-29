
var express = require('express');

var app = express();

/*
app.get('/', function(req, res) {
	res.sendFile('index.html', {root: "/root/awesome-test/"});
	});
*/

app.use(express.static('./'));

// start the server on port 80
app.listen(80);

