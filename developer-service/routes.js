const app = require('express').Router();

const util = require('./util');
app.post('/createtask', util.createtask);
app.post('/gettask', util.gettask);
app.post('/updatetask', util.updatetask);
app.post('/updatetaskstatus', util.updatetaskstatus);
app.post('/createtimesheet', util.createtimesheet);
app.post('/updatetimesheet', util.updatetimesheet);
app.post('/gettaskreport', util.gettaskreport);
app.post('/gettimesheetreport', util.gettimesheetreport);

/* Default */
app.get('/', (req, res) => {
	res.status(200).json({ message: 'Connected!' });
});

module.exports = app;