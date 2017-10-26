
var express = require('express');

var app = express();

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: "/root/awesome-test/"});
	});
app.get('/weather2',function(req,res){
	res.sendFile('weather2.htm', {root: '/root/awesome-test/'});
	});

app.get('/wikipedia',function(req,res){
	res.sendFile('wikipedia.html',{root:'/root/awesome-test/'});
	});

app.get('/chatfieldcreatelogo',function(req,res){
	res.sendFile('chatfieldcreatelogo.png',{root:'/root/awesome-test/'});
	});

app.get('/chatfieldcreateicon',function(req,res){
	res.sendFile('chatfieldcreateicon.png',{root:'/root/awesome-test/'});
	});

app.get('/favicon',function(req,res){
	res.sendFile('favicon.ico',{root:'/root/awesome-test/'});
	});

app.get('/devblog',function(req,res){
	res.sendFile('devblog.html',{root:'/root/awesome-test/'});
	});

app.get('/northwest-background',function(req,res){
	res.sendFile('northwest-background.jpg',{root:'/root/awesome-test/'});
	});

app.get('/tribute',function(req,res){
	res.sendFile('tribute.html',{root:'/root/awesome-test/'});
	});

app.get('/twitch',function(req,res){
	res.sendFile('twitch.html',{root:'/root/awesome-test/'});
	});

app.get('/quote',function(req,res){
	res.sendFile('quote.html',{root:'/root/awesome-test/'});
	});



app.use(express.static('./'));

// start the server on port 80
app.listen(80);

