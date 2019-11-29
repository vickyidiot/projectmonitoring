const express = require('express');
const app = express();
const http = require('http');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const eurekaHelper = require('./eureka-helper');

const routes = require('./routes');

const port = 8001;

const db = mysql.createConnection ({
    host: 'localhost',
    user: 'vignesh',
    password: '',
    database: 'promon'
});

db.connect((err) => {
    if (err) {
        throw err;
    }else{
        console.log('Connected to database');
        http.createServer(app).listen(port, () => {
            console.log(`Listening on port : ${port}`);
        });
    }
});
global.db = db;

eurekaHelper.registerWithEureka('manager-service', port);

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));
app.use('/', routes);