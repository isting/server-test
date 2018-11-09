/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : blog-view

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2018-09-12 18:27:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for blog_list_show
-- ----------------------------
DROP TABLE IF EXISTS `blog_list_show`;
CREATE TABLE `blog_list_show` (
  `id` int(3) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(10) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL COMMENT '个性签名',
  `title` varchar(30) NOT NULL,
  `content` text NOT NULL,
  `create_time` int(13) unsigned DEFAULT NULL COMMENT '创建时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of blog_list_show
-- ----------------------------
INSERT INTO `blog_list_show` VALUES ('1', 'ting', null, '人生', '你依然是我的软肋，却不再是我的铠甲', '4294967295');
INSERT INTO `blog_list_show` VALUES ('2', 'ting', null, '释迦摩尼', '我一直相信释迦牟尼说的一句话：“无论你遇见谁，他都是你生命该出现的人，绝非偶然，他一定会教会你一些什么”。所以我也相信：“无论我走到哪里，那都是我该去的地方，经历一些我该经历的事，遇见我该遇见的人”你会不断的遇见一些人，也会不停的和一些人说再见，从陌生到熟悉，从熟悉再回陌生，从臭味相投到分道扬镳，从相见恨晚到不如不见', null);
INSERT INTO `blog_list_show` VALUES ('3', 'ting', null, '被烧坏的房子', '一栋住了很久的房子，被一把大火烧了，看着满地的灰尘，你明白，这依然是你的家，只是再也回不去了', null);
INSERT INTO `blog_list_show` VALUES ('4', 'ting', null, '推太阳下山', '　一个船夫摇着一只小船在大海中行驶，浪花不断地向小船涌来，小船随着波浪微微地荡漾。一只海鸥栖在船夫的肩头，对他说：“你多幸福啊，大海摇荡着你，就像在打秋千似的。”\r\n　　\r\n　　船夫听了，摇摇头笑着说：“不对，是我在摇荡着大海！你看，大海的波涛都被我摇起来了。”\r\n　　\r\n　　所谓的大与小、强与弱，很多时候都是依照人们的感官和习惯定论的。只要你不甘示弱，不自视其小，那么弱小又从何谈起呢？\r\n　　\r\n　　晏子使楚的故事人人皆知：晏子身材矮小，楚人为了戏弄他，在城墙大门一侧造了一个小门，让他进来。晏子不进，道：“使狗国者，从狗门入；今臣使楚，不当从此门入。”寥寥数语，犀利尖锐，让楚国自取其辱，只得开大门让其通行。身材矮小，但心不能小，鄙睨对方的气与信念不能小，试想，要是晏子当初一言不发从小门进去了，又怎么会留下这彪炳千古的史话？\r\n　　\r\n　　日薄西山，失意的人往往怅惘沮丧不已，可是对于那些乐观向上的人来说，却不是这样了——“我向天涯走一步，天涯向后退一步。太阳不是自己落下山去的，而是我把它推下去的，看看我的力量有多大！”\r\n　　\r\n　　说得真好，只要你向前走，天涯就会往后退，在你昂然自信的步伐面前，天神都对你畏惧。\r\n　　\r\n　　所以，再不要说自己怎样微小。你的心里原本就蕴藏着无坚不摧的力量，它不仅能使大海起浪，山林震撼，还能把太阳推下山去！　', null);
INSERT INTO `blog_list_show` VALUES ('6', 'ting', null, '一个人一定要有一颗温柔善良宽容的心', '一个人一定要有一颗温柔善良宽容的心。也就是对人要满怀恭敬之心、慈悲之心、豁达之心。对人恭敬，就是在庄严你自己；对人慈悲，上帝也会给予你慈悲的，拥有一颗无私的爱心，你便拥有了一切。人生的真理，只是藏在平淡无味之中。', null);

-- ----------------------------
-- Table structure for simple
-- ----------------------------
DROP TABLE IF EXISTS `simple`;
CREATE TABLE `simple` (
  `code` varchar(30) DEFAULT NULL,
  `name` char(20) DEFAULT NULL,
  `id` int(4) unsigned zerofill NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of simple
-- ----------------------------
INSERT INTO `simple` VALUES ('1425053309', '刘廷', '0001');
INSERT INTO `simple` VALUES ('15696523658', '王二', '0002');
