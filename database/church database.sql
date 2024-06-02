CREATE DATABASE IF NOT EXISTS church;

USE church;

CREATE TABLE IF NOT EXISTS attendance(
attendance_id INT AUTO_INCREMENT,
attendance_ward_people INT NOT NULL,
attendance_foreign_people INT NOT NULL,
attendance_date DATE NOT NULL,
PRIMARY KEY(attendance_id)
);

CREATE TABLE IF NOT EXISTS role(
	role_id INT AUTO_INCREMENT,
    role_name VARCHAR(10) NOT NULL,
    PRIMARY KEY(role_id)
);
CREATE TABLE IF NOT EXISTS account(
	account_id INT AUTO_INCREMENT,
    account_firstname VARCHAR(25) NOT NULL,
    account_lastname VARCHAR(25) NOT NULL,
    account_email VARCHAR(30) NOT NULL,
    account_password CHAR(64) NOT NULL,
    role_id INT NOT NULL,
	PRIMARY KEY(account_id),
    FOREIGN KEY(role_id) REFERENCES role(role_id)
);
