const sqlqueries = require('./sqlqueries');

exports.createtask = function (req, res) {
    let { description, priority, status, assigned_to, start_date, due_date } = req.body;
    if (description === undefined || description === null) {
        res.status(500).json({ errormessage: 'Description Column Is Required' });
    } else {
        let values = [description, priority || '', status || '', assigned_to || 0, start_date, due_date];
        db.query(sqlqueries.inserttask, values, (err, docs) => {
            if (err) {
                res.status(500).json({ errormessage: err });
            } else {
                res.status(200).json({ successmessage: 'Created Task' });
            }
        });
    }
};