
# Timetable-Generator
=======

## Key Features of Your Project
- **Authentication:** Secure login with different user roles (Student, Teacher, HOD).
- **Timetable Generation:** Backend automatically generates schedules with no conflicts.
- **Download Functionality:** Users can save and export their timetable.
- **Role-Based Access:** Different users see different timetable views.
- **Beautiful UI:** Clean design with CSS, styled buttons, and a responsive layout.

### 1. Login Page (/login)
**How It Looks:**

- A clean login form with email & password fields.
- A "Login" button that authenticates users.
- Shows error messages if login fails.
- Redirects users to the Dashboard upon successful login.

### 2. Dashboard Page (/dashboard)
**How It Looks:**

- Displays "Welcome to Your Dashboard".
- "Generate Timetable" Button to navigate to the timetable page.
- "Logout" Button for signing out.
  
### Different for Each User Role:
1. **Students:** Can only view their own class timetable.
2. **Teachers:** Can see all their lectures across different classes.
3. **HOD:** Has access to all timetables.

### 3. Timetable Page (/timetable)
**How It Looks:**

- Dropdown to select the academic year.
- Dropdown to select the role (Student, Teacher, HOD).
- "Generate Timetable" Button (Fetches timetable from the backend).
- "Download Timetable" Button (Exports the timetable as a CSV file).
- Loading Indicator when timetable generation is in progress.
- Table Displaying Timetable Data, showing:
  1. Class
  2. Subject
  3. Teacher
  4. Room
  5. Day
  6. Time Slot
 
### 4. Timetable Download (CSV File)
**What Happens When You Click "Download Timetable"?**

- A CSV file (timetable.csv) is generated and downloaded.
- The file contains all the scheduled classes, subjects, teachers, and timings in a structured format.


