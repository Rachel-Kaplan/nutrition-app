//var models = require('../db/db');
var express = require('express');
var router = express();
var mysql = require('mysql');
//var $sql = require('../db/sqlMap');
var moment = require('moment');
//debugger;

var server = router.listen(5000, function () {
  console.log('Node server is running..');
});

//var conn = mysql.createConnection(models.mysql);
router.get('/', function (req, res) {
    res.send('<html><body><h1>Hello World</h1></body></html>');
});
//conn.connect();
var jsonWrite = function(res, ret) {
    if(typeof ret === 'undefined') {
        res.json({
            code: '1',
            msg: ''
        });
    } else {
        res.json(ret);
    }
};

//router.get('/', function (req, res) {
//  res.render('index', { title: 'Express' });
//    //res.send('<html><body><h1>Hello World</h1></body></html>');
//});

router.post('/addUser', (req, res) => {
    var sql = $sql.user.add;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name, params.price], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/userList', (req, res) => {
    var sql = $sql.user.select;
    conn.query(sql, function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            result.map(function(i, k, o){
                o[k].creat_time = moment(i.creat_time).format("YYYY-MM-DD hh:mm:ss")
                return o
            })
            //result.creat_time = moment(result.creat_time).format("YYYY-MM-DD")
            console.log(result)
            jsonWrite(res, result);
        }
    })
});

router.post('/delUserById', (req, res) => {
    var sql = $sql.user.delete;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.id], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.post('/updateUserById', (req, res) => {
    var sql = $sql.user.update;
    var params = req.body;
    console.log(params);
    conn.query(sql, [params.name, params.price, params.id], function(err, result) {
        if (err) {
            console.log(err);
        }
        if (result) {
            jsonWrite(res, result);
        }
    })
});

router.get('/addUser', (req, res) => {
     res.send('retrunJson');
});
 
module.exports = router;
