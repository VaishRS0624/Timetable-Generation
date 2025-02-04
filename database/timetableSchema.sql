-- Create Database
CREATE DATABASE IF NOT EXISTS timetable_db;
USE timetable_db;

-- Users Table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(100) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'teacher', 'hod') NOT NULL
);

-- Teachers Table
CREATE TABLE teachers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

-- Subjects Table
CREATE TABLE subjects (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    teacher_id INT NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (class_id) REFERENCES classes(id)
);

-- Classes Table
CREATE TABLE classes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    year INT NOT NULL,
    semester VARCHAR(10) NOT NULL
);

-- Classrooms Table
CREATE TABLE classrooms (
    id INT AUTO_INCREMENT PRIMARY KEY,
    room_no VARCHAR(20) NOT NULL UNIQUE
);

-- Days Table
CREATE TABLE days (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name ENUM('Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday') NOT NULL
);

-- Time Slots Table
CREATE TABLE time_slots (
    id INT AUTO_INCREMENT PRIMARY KEY,
    start_time TIME NOT NULL,
    end_time TIME NOT NULL
);

-- Timetable Table
CREATE TABLE timetable (
    id INT AUTO_INCREMENT PRIMARY KEY,
    class_id INT NOT NULL,
    subject_id INT NOT NULL,
    teacher_id INT NOT NULL,
    room_id INT NOT NULL,
    day_id INT NOT NULL,
    time_slot_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES classes(id),
    FOREIGN KEY (subject_id) REFERENCES subjects(id),
    FOREIGN KEY (teacher_id) REFERENCES teachers(id),
    FOREIGN KEY (room_id) REFERENCES classrooms(id),
    FOREIGN KEY (day_id) REFERENCES days(id),
    FOREIGN KEY (time_slot_id) REFERENCES time_slots(id)
);

-- Sample Data for Users
INSERT INTO users (email, password, role) VALUES
('student1@example.com', '$3b$20$hashedpassword1', 'student'),
('teacher1@example.com', '$2hashedpassword2', 'teacher'),
('hod@example.com', '$10$hashedpassword3', 'hod');

-- Sample Data for Teachers
INSERT INTO teachers (name) VALUES 
('Dr. Vaishnavi Patil'), 
('Prof. Rao shinde'), 
('Dr. Jayesh Patil'),
('Prof. Suvarna Shinde');

-- Sample Data for Classes
INSERT INTO classes (year, semester) VALUES 
(2024, 'Spring'), 
(2024, 'Fall'), 
(2025, 'Spring'),
(2025, 'Fall');

-- Sample Data for Subjects
INSERT INTO subjects (name, teacher_id, class_id) VALUES 
('Data Structures', 1, 1),
('Computer Networks', 2, 1),
('Operating Systems', 3, 2),
('Machine Learning', 4, 2),
('System Design', 5, 2),
('Cloud Computing', 6, 3);

-- Sample Data for Classrooms
INSERT INTO classrooms (room_no) VALUES 
('R101'), 
('R102'), 
('R103'),
('R104');

-- Sample Data for Days
INSERT INTO days (name) VALUES 
('Monday'), 
('Tuesday'), 
('Wednesday'), 
('Thursday'), 
('Friday');

-- Sample Data for Time Slots
INSERT INTO time_slots (start_time, end_time) VALUES 
('09:00:00', '10:00:00'), 
('10:15:00', '11:15:00'), 
('11:30:00', '12:30:00')
('13:30:00', '14:30:00'),
('14:30:00', '15:30:00');

-- Sample Timetable Data
INSERT INTO timetable (class_id, subject_id, teacher_id, room_id, day_id, time_slot_id) VALUES 
(1, 1, 1, 1, 1, 1),
(1, 2, 2, 2, 2, 2),
(2, 3, 3, 3, 3, 3);
