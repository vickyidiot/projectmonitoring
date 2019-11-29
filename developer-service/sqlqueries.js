module.exports = {
  inserttask: "INSERT INTO TASK (description, priority, status, assigned_to, start_date, due_date) values (?, ?, ?, ?, ?, ?);",
  gettask: "SELECT * FROM TASK WHERE id = ?;",
  updatetask: "UPDATE TASK SET  description = ?, priority = ?, status = ?, assigned_to = ?, start_date = ?, due_date = ? WHERE id = ?;",
  updatetaskstatus: "UPDATE TASK SET status = ? WHERE id = ?;",
  inserttimesheet: "INSERT INTO TIMESHEET (user_id, task_id, total_time_spent, tso_development, tso_testing, tso_bug_fix_improvements, tso_deployment, tso_meeting) values (?, ?, ?, ?, ?, ?, ?, ?);",
  updatetimesheet: "UPDATE TIMESHEET SET total_time_spent = ?, tso_development = ?, tso_testing = ?, tso_bug_fix_improvements = ?, tso_deployment = ?, tso_meeting = ? where id = ?;",
  gettaskreport: "SELECT * FROM TASK",
  gettimesheetreport: "SELECT * FROM TIMESHEET"
}