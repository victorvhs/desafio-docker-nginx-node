SET NAMES utf8;
SET time_zone = '-03:00';
SET foreign_key_checks = 0;

DROP DATABASE IF EXISTS `nodedb`;
CREATE DATABASE `nodedb`;
USE `nodedb`;

DROP TABLE IF EXISTS `people`;
CREATE TABLE `people` (
  `id` bigint(15) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(75) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;