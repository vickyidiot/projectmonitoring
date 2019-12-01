const express = require('express');
const app = express();
const http = require('http');
const bodyparser = require('body-parser');
const mysql = require('mysql');
const eurekaHelper = require('./eureka-helper');
// const pathToSwaggerUi = require('swagger-ui-dist').absolutePath()
const swaggerUi = require('swagger-ui-express');

const routes = require('./routes');
const swaggerDocument = require('./swagger.json');

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
// app.use(express.static(__dirname + "/public"));
// app.use(express.static(pathToSwaggerUi))
var options = {
    // customJs: '/custom.js'
    // swaggerOptions: {
    //   url: 'http://localhost:8001/swagger.json'
    // }
  };
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, options));
app.use('/', routes);