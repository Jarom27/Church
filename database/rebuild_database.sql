-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema church
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema church
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `church` DEFAULT CHARACTER SET utf8 ;
USE `church` ;

-- -----------------------------------------------------
-- Table `church`.`attendance`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `church`.`attendance` (
  `attendance_id` INT NOT NULL AUTO_INCREMENT,
  `attendance_ward` INT NOT NULL DEFAULT 0,
  `attendance_date` DATE NOT NULL,
  `attendance_foreign` INT NOT NULL,
  PRIMARY KEY (`attendance_id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
