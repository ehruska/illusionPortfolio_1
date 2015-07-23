var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Msg = require('./models/msgs')

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/contactmsg')

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use("/bower_components", express.static(__dirname + '/bower_components'));

app.get('/', function(req, res) {
	res.render('index');
});
app.get('/ideadex', function(req, res) {
	res.render('ideadex');
});
app.get('/galaga', function(req, res) {
	res.render('galaga');
});
app.get('/contactme', function(req, res) {
	res.render('contactus');
});

app.post('/sendmsg', function(req, res) {
	var data = req.body;

	var newmsg = {
		name:data.name,
		email:data.email,
		message:data.message
	}

	var message = new Msg(newmsg);
	message.save(function(err, savedMsg){
		res.send(savedMsg);
		// res.redirect('/contactme');
	})
});

var server = app.listen(3034, function() {
	console.log('Express server listening on port ' + server.address().port);
});
