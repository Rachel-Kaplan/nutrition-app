//node api
const userApi = require('./api/userApi');
//const fruitApi = require('./api/fruitApi');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//debugger;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
 
//user api
app.use('/api/n', userApi);
//app.use('/api/fruit', fruitApi);
 
//
//app.listen(1337);
console.log('success listen at port:3000......');
