//var router = require('./routes/index');
let express = require('express');
var cors = require('cors')
let app = express();
app.use(cors())
let users = require('./routes/users');
let protein = require('./routes/protein');
let carbohyrate = require('./routes/carbohydrate');
let fruits = require('./routes/fruits');
let vegetables = require('./routes/vegetables');
let userMeals = require('./routes/userMeals');


let mysql = require('mysql');
let connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: null,
    database: "nutrition_app"
});
let bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', users);
app.use('/protein', protein);
app.use('/fruits', fruits);
app.use('/vegetables', vegetables);
app.use('/carbohyrate', carbohyrate);
app.use('/user-meals', userMeals);

app.set('port', process.env.PORT || 3000);

let server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});
