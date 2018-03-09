
var express = require('express');
var app = express();
var assert = require('assert');

app.use(express.static('./'));

app.listen(80);
console.log('server running on port 80');