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