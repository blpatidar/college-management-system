/*
SQLyog Ultimate v9.02 
MySQL - 5.7.20-log : Database - ors_database
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`ors_database` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `ors_database`;

/*Table structure for table `clg_role` */

DROP TABLE IF EXISTS `clg_role`;

CREATE TABLE `clg_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `description` varchar(100) NOT NULL,
  `createdBy` varchar(20) NOT NULL DEFAULT ' ',
  `modifiedBy` varchar(20) NOT NULL DEFAULT ' ',
  `createdDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `modifiedDateTime` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `clg_role` */

/*Table structure for table `clg_students` */

DROP TABLE IF EXISTS `clg_students`;

CREATE TABLE `clg_students` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `dob` date NOT NULL,
  `mobileNo` varchar(15) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmPassword` varchar(255) NOT NULL,
  `collegeId` varchar(20) NOT NULL,
  `collegeName` varchar(255) NOT NULL,
  `createdBy` varchar(20) NOT NULL DEFAULT '  ',
  `modifiedBy` varchar(20) NOT NULL DEFAULT ' ',
  `createdDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `modifiedDateTime` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `clg_students` */

/*Table structure for table `clg_users` */

DROP TABLE IF EXISTS `clg_users`;

CREATE TABLE `clg_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `address` varchar(255) NOT NULL,
  `state` varchar(20) NOT NULL,
  `city` varchar(20) NOT NULL,
  `phoneNo` varchar(15) NOT NULL,
  `createdBy` varchar(20) NOT NULL DEFAULT '   ',
  `modifiedBy` varchar(20) NOT NULL DEFAULT '   ',
  `createdDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `modifiedDateTime` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `clg_users` */

/*Table structure for table `st_login` */

DROP TABLE IF EXISTS `st_login`;

CREATE TABLE `st_login` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(20) NOT NULL,
  `password` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `st_login` */

/*Table structure for table `st_marksheet` */

DROP TABLE IF EXISTS `st_marksheet`;

CREATE TABLE `st_marksheet` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rollNo` varchar(20) NOT NULL,
  `studentId` varchar(20) NOT NULL,
  `name` varchar(20) NOT NULL,
  `physics` int(5) NOT NULL,
  `chemistry` int(5) NOT NULL,
  `maths` int(5) NOT NULL,
  `createdBy` varchar(20) NOT NULL DEFAULT ' ',
  `modifiedBy` varchar(20) NOT NULL DEFAULT ' ',
  `createdDateTime` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `modifiedDateTime` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `st_marksheet` */

/*Table structure for table `st_users` */

DROP TABLE IF EXISTS `st_users`;

CREATE TABLE `st_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(20) NOT NULL,
  `lastName` varchar(20) NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(255) NOT NULL,
  `confirmPassword` varchar(255) NOT NULL,
  `dob` date NOT NULL,
  `mobileNo` varchar(15) NOT NULL,
  `roleId` varchar(20) NOT NULL,
  `gender` varchar(15) NOT NULL,
  `unSuccessfulLogin` int(11) NOT NULL,
  `lastLogin` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6),
  `createdBy` varchar(20) NOT NULL DEFAULT ' ',
  `modifiedBy` varchar(20) NOT NULL DEFAULT ' ',
  `createdDateTime` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  `modifiedDateTime` timestamp(6) NOT NULL DEFAULT '0000-00-00 00:00:00.000000',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `st_users` */

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
