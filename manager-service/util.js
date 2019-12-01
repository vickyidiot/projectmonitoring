const sqlqueries = require('./sqlqueries');
let nodemailer = require('./nodemailer');

/* Mail Id Has To Be Taken From Database Dynamically,Hardcoding For Now */
const mailid = {
    "manager": 'mplvignesh@gmail.com',
    "developer": 'mplvignesh@gmail.com',
};

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

exports.gettask = function (req, res) {
    let task_id = req.body.task_id;
    if (task_id === undefined || task_id === null) {
        res.status(500).json({ errormessage: 'task_id Column Is Required To Fetch Task Details' });
    } else {
        db.query(sqlqueries.gettask, task_id, (err, docs) => {
            if (err) {
                res.status(500).json({ errormessage: err });
            } else {
                res.status(200).json({ successmessage: 'Fetched Task Details', data: docs });
            }
        });
    }
};

exports.updatetask = function (req, res) {
    let { task_id, description, priority, status, assigned_to, start_date, due_date } = req.body;
    if (task_id === undefined || task_id === null) {
        res.status(500).json({ errormessage: 'task_id Column Is Required' });
    } else if (description === undefined || description === null) {
        res.status(500).json({ errormessage: 'Description Column Is Required' });
    } else {
        let values = [description, priority || '', status || '', assigned_to || 0, start_date, due_date, task_id];
        db.query(sqlqueries.updatetask, values, (err, docs) => {
            if (err) {
                res.status(500).json({ errormessage: err });
            } else {
                res.status(200).json({ successmessage: 'Task Modified' });
            }
        });
    }
};

exports.updatetaskstatus = function (req, res) {
    let { task_id, status } = req.body;
    if (task_id === undefined || task_id === null) {
        res.status(500).json({ errormessage: 'task_id Column Is Required' });
    } else if (status === undefined || status === null) {
        res.status(500).json({ errormessage: 'Status Column Is Required' });
    } else {
        let values = [status, task_id];
        db.query(sqlqueries.updatetaskstatus, values, (err, docs) => {
            if (err) {
                res.status(500).json({ errormessage: err });
            } else {
                res.status(200).json({ successmessage: 'Task Status Updated' });
            }
        });
    }
}

exports.createtimesheet = function (req, res) {
    let { user_id, task_id, total_time_spent, tso_development, tso_testing, tso_bug_fix_improvements, tso_deployment, tso_meeting } = req.body;
    if (user_id === undefined || user_id === null) {
        res.status(500).json({ errormessage: 'user_id Column Is Required' });
    } else if (task_id === undefined || task_id === null) {
        res.status(500).json({ errormessage: 'task_id Column Is Required' });
    } else if (total_time_spent === undefined || total_time_spent === null) {
        res.status(500).json({ errormessage: 'total_time_spent Column Is Required' });
    } else {
        let values = [user_id, task_id, total_time_spent, tso_development, tso_testing, tso_bug_fix_improvements, tso_deployment, tso_meeting];
        db.query(sqlqueries.inserttimesheet, values, (err, docs) => {
            if (err) {
                res.status(500).json({ errormessage: err });
            } else {
                let mailOptions = {
                    from: 'mplvignesh@gmail.com',
                    to: 'mplvignesh@gmail.com',
                    subject: `Timesheet Has Been Entered For Task ID ${task_id} By User ${user_id}`,
                    text: `
                    Total Time Spent : ${total_time_spent},
                    Time Spent On Development : ${tso_development},
                    Time Spent On Testing : ${tso_testing},
                    Time Spent On Bug Fix Improvements : ${tso_bug_fix_improvements},
                    Time Spent On Deployment : ${tso_deployment},
                    Time Spent On Meeting : ${tso_meeting}`
                };
                nodemailer.transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.status(200).json({ successmessage: 'Created Timesheet' });
            }
        });
    }
}

exports.updatetimesheet = function (req, res) {
    let { user_id, task_id, timesheet_id, total_time_spent, tso_development, tso_testing, tso_bug_fix_improvements, tso_deployment, tso_meeting } = req.body;
    if (timesheet_id === undefined || timesheet_id === null) {
        res.status(500).json({ errormessage: 'timesheet_id Column Is Required' });
    } else if (total_time_spent === undefined || total_time_spent === null) {
        res.status(500).json({ errormessage: 'total_time_spent Column Is Required' });
    } else {
        let values = [total_time_spent, tso_development, tso_testing, tso_bug_fix_improvements, tso_deployment, tso_meeting, timesheet_id];
        db.query(sqlqueries.updatetimesheet, values, (err, docs) => {
            if (err) {
                res.status(500).json({ errormessage: err });
            } else {
                let mailOptions = {
                    from: 'mplvignesh@gmail.com',
                    to: 'mplvignesh@gmail.com',
                    subject: `Timesheet Has Been Update For Task ID ${task_id} By User ${user_id}`,
                    text: `
                    Total Time Spent : ${total_time_spent},
                    Time Spent On Development : ${tso_development},
                    Time Spent On Testing : ${tso_testing},
                    Time Spent On Bug Fix Improvements : ${tso_bug_fix_improvements},
                    Time Spent On Deployment : ${tso_deployment},
                    Time Spent On Meeting : ${tso_meeting}`
                };
                nodemailer.transporter.sendMail(mailOptions, function (error, info) {
                    if (error) {
                        console.log(error);
                    } else {
                        console.log('Email sent: ' + info.response);
                    }
                });
                res.status(200).json({ successmessage: 'Modified Timesheet' });
            }
        });
    }
}

exports.gettaskreport = function (req, res) {
    db.query(sqlqueries.gettaskreport, (err, docs) => {
        if (err) {
            res.status(500).json({ errormessage: err });
        } else {
            res.status(200).json({ successmessage: 'Fetched Task Report', data: docs });
        }
    });
}

exports.gettimesheetreport = function (req, res) {
    db.query(sqlqueries.gettimesheetreport, (err, docs) => {
        if (err) {
            res.status(500).json({ errormessage: err });
        } else {
            res.status(200).json({ successmessage: 'Fetched Timesheet Report', data: docs });
        }
    });
}