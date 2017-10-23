
// grab express
var express = require('express');

//var path = require('path');
// create an express app
var app = express();

// create an express route for the home page
// hompage is: http://localhost:80/


//app.set('port',80);

app.get('/', function(req, res) {
	res.sendFile('index.html', {root: "/root/awesome-test/"});
	});
app.get('/weather',function(req,res){
	res.sendFile('weather.html', {root: '/root/awesome-test/'});
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

app.get('/projects',function(req,res){
	res.sendFile('projects.html',{root:'/root/awesome-test/'});
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



//app.use(express.static(path.join(_dirname, 'public')));

// start the server on port 80
app.listen(80);

/*
var server = app.listen(app.get('port'),function(){
	var port = server.address().port;
});
*/

