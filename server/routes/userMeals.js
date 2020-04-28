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
connection.connect(function (err) {
    if (err) {
        res.status(400).send({success: false});
        console.log(err);
    }
    ;
});
router.post('/', function (req, res) {
    var params = req.body;

    console.log("Connected!");
    var sqlquery = "INSERT INTO user_meals (user_id, meal_type, carbohydrate_choosen, fruits_choosen, protein_choosen, vegtables_choosen, date) VALUES ( ?, ?, ?, ?, ?, ?, ?)";
    connection.query(sqlquery, [params.user_id, params.meal_type, params.carbohydrate_choosen, params.fruits_choosen, params.protein_choosen, params.vegtables_choosen, new Date()],
        function (err, result) {
            if (err) {
                res.status(400).send({success: false});
                console.log(err)
            }
            else {
                console.log("Added successfully");
                res.status(200).send(result);
            }
        });

    //res.sendFile(__dirname + 'register_new.html')
});
module.exports = router;