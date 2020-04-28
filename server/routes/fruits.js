'use strict';
var express = require('express');
var router = express();
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "nutrition_app"
});

router.get('/', function (req, res) {
    var params = req.body;
    connection.connect(function (err) {
        if (err) {
            res.status(400).send({ success: false });
            console.log(err);
        };
        console.log("Connected!");
        var sqlquery = "select * from fruits";
        connection.query(sqlquery,
            function (err, result) {
                if (err) {
                    console.log(err);
                    res.status(400).send({ success: false });
                    console.log(err)
                };
                res.status(200).send( result ); console.log("fruits Added successfully");
            });
    });
    //res.sendFile(__dirname + 'register_new.html')
});
module.exports = router;
