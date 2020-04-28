//'use strict';
//var express = require('express');
//var router = express.Router();

//var server = app.listen(5000, function () {
//    console.log('Node server is running..');
//});

//app.get('/', function (req, res) {
//    res.send('<html><body><h1>Hello World</h1></body></html>');
//});


///* GET home page. */
//router.get('/', function (req, res) {
//    res.render('index', { title: 'Express' });
//});

//module.exports = router;

var express = require('express');
var app = express();

var server = app.listen(5000, function () {
    console.log('Node server is running..');
});
//app.get('/', function (req, res) {
//    res.send('<html><body><h1>Hello World</h1></body></html>');
//});


/* GET home page. */
//app.get('/', function (req, res) {
//    //res.render('../register_new.html');
//    //res.render(express.static('register_new.html'));
//    //res.render('index', { title: 'Express' });
//});
