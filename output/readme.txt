BUILD INSTRUCTION

----------------------
DATABASE CONFIGURATION
----------------------
1) Execute manager-service/sqldocument.sql for creating basic schema and basic data required for application to run.

-----------------------------
MANAGER SERVICE CONFIGURATION
-----------------------------
1)In manager-service/server.js update application port and mysql connection details.
2)In manager-service/eureka-helper.js update eurekaPort value to the port where the EUREKA service actually runs.
3)In manager-service/nodemailer.js update email credentials.

-------------------------------
DEVELOPER SERVICE CONFIGURATION
-------------------------------
1)In developer-service/server.js update application port and mysql connection details.
2)In developer-service/eureka-helper.js update eurekaPort value to the port where the EUREKA service actually runs.
3)In developer-service/nodemailer.js update email credentials.
________________________________________________________________________________________________________________________________________

-----------------
STARTING SERVICES
-----------------
1)Import "eureka-service" code to project and run (Ignore if already a EUREKA is running).
2)Import "zuul-service" code to project and run (Ignore if already a ZUUL is running).
3)Open manager-service location in terminal and enter command "npm start" or "node server.js"
4)Open developer-service location in terminal and enter command "npm start" or "node server.js"
________________________________________________________________________________________________________________________________________

---------------------------------------------------------
END POINT URL AND SAMPLE INPUT FOR E2E FUNCTIONAL TESTING
---------------------------------------------------------
http://localhost:8050/manager-service/createtask
{
    "description" : "First Task,Write Rest End Points",
    "priority" : "HIGH",
    "status" : "Assigned",
    "assigned_to" : 1,
    "start_date" : "2019-11-05 10:00:00",
    "due_date" : "2019-12-01 23:59:59"
}

http://localhost:8050/manager-service/gettask
{
    "task_id" : 1
}

http://localhost:8050/manager-service/updatetask
{
    "task_id" : 1,
    "description" : "First Task,Write Rest End Points And Edited",
    "priority" : "HIGH",
    "status" : "Assigned",
    "assigned_to" : 1,
    "start_date" : "2019-11-04 10:00:00",
    "due_date" : "2019-12-01 23:59:59"
}

http://localhost:8050/developer-service/updatetaskstatus
{
    "task_id" : 1,
    "status" : "To Do"
}

http://localhost:8050/manager-service/createtimesheet
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

http://localhost:8050/manager-service/updatetimesheet
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

http://localhost:8050/manager-service/gettaskreport
{}

http://localhost:8050/manager-service/gettimesheetreport
{}
________________________________________________________________________________________________________________________________________

----------------
PROOF SCREENSHOT
----------------
API GATEWAY
01 - Eureka start-up page
02 - Zuul proxy start-up page
03 - Registing services components like zuul,developer-service and manager-service with eureka

API ENDPOINTS
/createtask - USING MANAGER-SERVICE
04 - Request URL and Request Parameter
05 - Response
06 - DB Changes

/gettask - USING MANAGER-SERVICE
07 - Request URL and Request Parameter
08 - Response

/updatetask - USING MANAGER-SERVICE
09 - Request URL and Request Parameter
10 - Response
11 - DB Changes

/updatetaskstatus - USING DEVELOPER-SERVICE
12 - Request URL and Request Parameter
13 - Response
14 - DB Changes

/createtimesheet
15 - Request URL and Request Parameter
16 - Response
17 - DB Changes
18 - Mail Proof

/updatetimesheet
19 - Request URL and Request Parameter
20 - Response
21 - DB Changes
22 - Mail Proof

SWAGGER API DOCUMENTATION - PARTIALLY COMPLETED
23,24 - Setting up swagger and implementation
25 - But unable to connect to service

CONTAINERIZATION - PARTIALLY COMPLETED
26,27 - Docker implimentation and creating image
28 - Not able to start service due to port conflict mapping.
________________________________________________________________________________________________________________________________________
AUTHORIZATION - PENDING
________________________________________________________________________________________________________________________________________
