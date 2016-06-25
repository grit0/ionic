/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 50614
 Source Host           : localhost
 Source Database       : db_sample_website

 Target Server Type    : MySQL
 Target Server Version : 50614
 File Encoding         : utf-8

 Date: 06/14/2016 22:00:45 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `tb_contact`
-- ----------------------------
DROP TABLE IF EXISTS `tb_contact`;
CREATE TABLE `tb_contact` (
  `id` int(5) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `nickname` varchar(100) NOT NULL,
  `social` varchar(200) NOT NULL,
  `mobile` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `tb_contact`
-- ----------------------------
BEGIN;
INSERT INTO `tb_contact` VALUES ('1', 'Phongsak Thomthitchong', 'Bank', 'http://youtube.com/senchabox', '0869797070'), ('2', 'Nakrit Thomthitchong', 'Namo', 'http://fb.com/sencha.dev', '1234567890'), ('3', 'Wichai Thomthitchong', 'Dad', 'http://senchabox.com', '0987654321');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
