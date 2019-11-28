const app = require('express').Router();

const util = require('./util');
app.post('/createtask', util.createtask);

/* Default */
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

module.exports = app;