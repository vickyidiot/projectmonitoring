CREATE TABLE IF NOT EXISTS `USER` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
    `name` varchar(255) NOT NULL DEFAULT '',
    `password` varchar(255) NOT NULL DEFAULT '',
    `role` varchar(255) NOT NULL DEFAULT '',
    `security_token` varchar(255) NOT NULL DEFAULT '',
    PRIMARY KEY (`id`)
);

insert into USER (name) values ("vignesh");
insert into USER (name) values ("murali");
insert into USER (name) values ("sabree");

CREATE TABLE IF NOT EXISTS `TASK` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
    `description` varchar(255) NOT NULL DEFAULT '',
    `priority` varchar(255) NOT NULL DEFAULT '',
    `status` varchar(255) NOT NULL DEFAULT '',
    `assigned_to` int(5) NOT NULL DEFAULT 0,
    `start_date`  TIMESTAMP NULL DEFAULT NULL,
    `due_date`  TIMESTAMP NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE IF NOT EXISTS `TIMESHEET` (
	`id` int(5) NOT NULL AUTO_INCREMENT,
    `user_id` int(5) NOT NULL DEFAULT 0,
    `task_id` int(5) NOT NULL DEFAULT 0,
    `total_time_spent` TIME NULL DEFAULT NULL,
    `tso_development` TIME NULL DEFAULT NULL,
    `tso_testing` TIME NULL DEFAULT NULL,
    `tso_bug_fix_improvements` TIME NULL DEFAULT NULL,
    `tso_deployment` TIME NULL DEFAULT NULL,
    `tso_meeting` TIME NULL DEFAULT NULL,
    PRIMARY KEY (`id`)
);