
DROP DATABASE IF EXISTS chat;

CREATE DATABASE chat;

USE chat;

-- CREATE TABLE messages (
--   /* Describe your table here.*/
-- );

-- ---
-- Globals
-- ---

-- SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
-- SET FOREIGN_KEY_CHECKS=0;

-- ---
-- Table 'users'
--
-- ---

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_name` VARCHAR(20) NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(300) DEFAULT 'NULL',
  `user_id` INTEGER NOT NULL,
  `room_id` INTEGER NOT NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `room_name` VARCHAR(25) NOT NULL UNIQUE,
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'friends'
--
-- ---

DROP TABLE IF EXISTS `friends`;

CREATE TABLE `friends` (
  `id` INTEGER NOT NULL AUTO_INCREMENT,
  `user_id` INTEGER NOT NULL,
  `friend_id` INTEGER NULL,
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

-- ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
-- ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
-- ALTER TABLE `friends` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
-- ALTER TABLE `friends` ADD FOREIGN KEY (friend_id) REFERENCES `users` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `friends` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`user_name`) VALUES
-- ('','');
-- INSERT INTO `messages` (`id`,`text`,`user_id`,`room_id`,`created_at`) VALUES
-- ('','','','','');
-- INSERT INTO `rooms` (`id`,`room_name`) VALUES
-- ('','');
-- INSERT INTO `friends` (`id`,`user_id`,`friend_id`) VALUES
-- ('','','');

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

