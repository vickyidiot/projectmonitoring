http://localhost:8001/createtask
{
    "description" : "First Task,Write Rest End Points",
    "priority" : "HIGH",
    "status" : "Assigned",
    "assigned_to" : 1,
    "start_date" : "2019-11-05 10:00:00",
    "due_date" : "2019-12-01 23:59:59"
}

http://localhost:8001/gettask
{
    "task_id" : 1
}

http://localhost:8001/updatetask
{
    "task_id" : 1,
    "description" : "First Task,Write Rest End Points And Edited",
    "priority" : "HIGH",
    "status" : "Assigned",
    "assigned_to" : 1,
    "start_date" : "2019-11-04 10:00:00",
    "due_date" : "2019-12-01 23:59:59"
}

http://localhost:8001/updatetaskstatus
{
    "task_id" : 1,
    "status" : "To Do"
}

http://localhost:8001/createtimesheet
{
    "task_id" : 1,
    "user_id" : 1,
    "total_time_spent" : "02:30",
    "tso_development" : "12:15",
    "tso_bug_fix_improvements" : "03:45",
    "tso_testing" : "01:15",
    "tso_meeting" : "04:00",
    "tso_deployment" : "01:15"
}

http://localhost:8001/updatetimesheet
{
    "user_id" : 1,
    "task_id" : 1,
    "timesheet_id" : 1,
    "total_time_spent" : "05:00",
    "tso_development" : "01:00",
    "tso_bug_fix_improvements" : "01:00",
    "tso_testing" : "01:00",
    "tso_meeting" : "01:00",
    "tso_deployment" : "01:00"
}

http://localhost:8001/gettaskreport
{}

http://localhost:8001/gettimesheetreport
{}