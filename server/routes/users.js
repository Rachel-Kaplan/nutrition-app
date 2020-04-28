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

router.get('/ac', function (req, res) {

    res.sendFile(__dirname + 'register_new.html')
});
connection.connect(function (err) {
    if (err) {
        console.log(err);
        res.status(400).send({ success: false });
    };
});
router.post('/', function (req, res) {
    var params = req.body;
    console.log("Connected!");
    let userId;
    var sqlquery = "INSERT INTO users (name, age, email, gender,weight) VALUES ( ?, ?, ?, ?, ?)";
    connection.query(sqlquery, [params.name, params.age, params.email, params.gender, params.weight],
        function (err, result) {
            console.log(result);
            if (err) {
                console.log(err)
                res.status(400).send({ userId: userId });
            }
            else {
                console.log("Added successfully");
                res.send({result});
            }
        });
    //res.sendFile(__dirname + 'register_new.html')
});
module.exports = router;
