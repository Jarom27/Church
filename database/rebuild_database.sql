-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS,
  UNIQUE_CHECKS = 0;
SET @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
  FOREIGN_KEY_CHECKS = 0;
SET @OLD_SQL_MODE = @@SQL_MODE,
  SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
-- -----------------------------------------------------
-- Schema church
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema church
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `church` DEFAULT CHARACTER SET utf8;
USE `church`;
-- -----------------------------------------------------
-- Table `church`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `church`.`attendance` (
  `attendance_id` INT NOT NULL AUTO_INCREMENT,
  `attendance_ward` INT NOT NULL DEFAULT 0,
  `attendance_date` DATE NOT NULL,
  `attendance_foreign` INT NOT NULL,
  PRIMARY KEY (`attendance_id`)
) ENGINE = InnoDB;
SET SQL_MODE = @OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;
USE church;
INSERT INTO attendance(
    attendance_ward,
    attendance_foreign,
    attendance_date
  )
VALUES (94, 0, "2024-01-07"),
  (84, 0, "2024-01-14"),
  (103, 0, "2024-01-21"),
  (93, 0, "2024-01-28"),
  (101, 0, "2024-02-04"),
  (105, 0, "2024-02-11"),
  (80, 0, "2024-02-18"),
  (82, 0, "2024-02-25"),
  (91, 5, "2024-03-03"),
  (100, 5, "2024-03-10"),
  (76, 7, "2024-03-17"),
  (110, 0, "2024-03-24"),
  (66, 3, "2024-03-31"),
  (97, 0, "2024-04-7"),
  (97, 0, "2024-04-14"),
  (92, 0, "2024-04-21"),
  (67, 8, "2024-04-28"),
  (78, 0, "2024-05-05"),
  (84, 2, "2024-05-12"),
  (96, 3, "2024-05-19"),
  (87, 6, "2024-05-26"),
  (80, 0, "2024-06-02");
SELECT *
FROM attendance;