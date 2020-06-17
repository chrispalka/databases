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
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `name` VARCHAR(20) NOT NULL DEFAULT 'NOT NULL',
  `age` INTEGER(2) NOT NULL DEFAULT NOT NULL,
  `room_id` INTEGER NULL DEFAULT NOT NULL,
  `location_id` VARCHAR(30) NOT NULL DEFAULT 'NOT NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'messages'
--
-- ---

DROP TABLE IF EXISTS `messages`;

CREATE TABLE `messages` (
  `id` VARCHAR(50) NOT NULL DEFAULT 'NULL',
  `user_id` VARCHAR(20) NOT NULL DEFAULT 'NOT NULL',
  `text` VARCHAR(300) NOT NULL DEFAULT 'NOT NULL',
  `room_id` VARCHAR(50) NOT NULL DEFAULT 'NOT NULL',
  `created_at` TIMESTAMP NOT NULL DEFAULT 'NOT NULL',
  `location_id` VARCHAR(25) NOT NULL DEFAULT 'NOT NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'rooms'
--
-- ---

DROP TABLE IF EXISTS `rooms`;

CREATE TABLE `rooms` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `room_name` VARCHAR(50) NOT NULL DEFAULT 'NOT NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Table 'locations'
--
-- ---

DROP TABLE IF EXISTS `locations`;

CREATE TABLE `locations` (
  `id` INTEGER NULL AUTO_INCREMENT DEFAULT NULL,
  `location_name` VARCHAR(25) NOT NULL DEFAULT 'NOT NULL',
  `timezone` VARCHAR(6) NOT NULL DEFAULT 'NOT NULL',
  PRIMARY KEY (`id`)
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE `users` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
ALTER TABLE `users` ADD FOREIGN KEY (location_id) REFERENCES `locations` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (user_id) REFERENCES `users` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (room_id) REFERENCES `rooms` (`id`);
ALTER TABLE `messages` ADD FOREIGN KEY (location_id) REFERENCES `locations` (`id`);

-- ---
-- Table Properties
-- ---

-- ALTER TABLE `users` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `messages` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `rooms` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
-- ALTER TABLE `locations` ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

-- ---
-- Test Data
-- ---

-- INSERT INTO `users` (`id`,`name`,`age`,`room_id`,`location_id`) VALUES
-- ('','','','','');
-- INSERT INTO `messages` (`id`,`user_id`,`text`,`room_id`,`created_at`,`location_id`) VALUES
-- ('','','','','','');
-- INSERT INTO `rooms` (`id`,`room_name`) VALUES
-- ('','');
-- INSERT INTO `locations` (`id`,`location_name`,`timezone`) VALUES
-- ('','','');