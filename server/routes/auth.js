const express = require('express');  
const bcrypt = require('bcryptjs');  
const jwt = require('jsonwebtoken');  
const db = require('../db');  
require('dotenv').config(); 

const router = express.Router(); 

// Replace with the environment variable  
const secretKey = process.env.JWT_SECRET;  

router.post('/login', (req, res) => {
  const { email, password } = req.body;
  
  db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
    if (err) return res.status(500).json(err);
    if (results.length === 0) return res.status(401).json({ message: 'User not found' });

    const user = results[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign(
      { id: user.id, role: user.role },
      secretKey,
      { expiresIn: '1h' }
    );

    res.json({ token, role: user.role });
  });
});

module.exports = router;




/*
Creating and managing credentials securely is crucial for any application, especially when dealing with sensitive data and authentication. Here’s a step-by-step guide on how to create these actual credentials, set them, and store them securely for your timetable application.

1. Database Credentials
a. Create a Database User
Access MySQL:
Open your terminal (or command prompt) and access the MySQL command line by entering:

bash
mysql -u root -p  
Enter your root password when prompted.

Create a New User:
Create a new user with specific privileges. Replace your_new_user and your_password with your desired username and password.

sql
CREATE USER 'your_new_user'@'localhost' IDENTIFIED BY 'your_password';  
Grant Privileges:
Give the new user the necessary permissions on the database (in this case, college_db):

sql
GRANT ALL PRIVILEGES ON college_db.* TO 'your_new_user'@'localhost';  
FLUSH PRIVILEGES;  
b. Configure the Database Connection
In your server/db.js file, replace the placeholders with your actual credentials:

javascript
const mysql = require('mysql');  

const db = mysql.createConnection({  
  host: 'localhost',  
  user: 'your_new_user',       // Use the new user you created  
  password: 'your_password',    // Use the password you set  
  database: 'college_db'        // The name of your database  
});  

db.connect(err => {  
  if (err) throw err;  
  console.log('Connected to the database');  
});  

module.exports = db;  
2. JWT Secret Key
a. Generate a JWT Secret Key
You can generate a secure random secret key using various methods. One common way is to use Node.js’s built-in crypto module.

Open a Node.js REPL by typing node in your terminal.
Run the following command to generate a secure key:
javascript
require('crypto').randomBytes(64).toString('hex');  
This will generate a long, random string that you can use as your JWT secret.
b. Configure the JWT Secret
Replace the placeholder in your server's authentication logic with the secret you generated. For example, in server/routes/auth.js:

javascript
const jwt = require('jsonwebtoken');  

// Replace with your generated secret  
const secretKey = 'your_generated_jwt_secret_key';  

router.post('/login', async (req, res) => {  
  // Your existing login logic...  
  const token = jwt.sign({ id: user.id }, secretKey, { expiresIn: '1h' });  
  return res.json({ token });  
});  
3. Storing Sensitive Data
Environment Variables:

A common practice for storing sensitive data like database credentials and JWT secrets is to use environment variables. This keeps your secrets out of your source code and allows you to manage them easily across different environments (development, testing, production).

a. Create a .env File
Create a .env file in your /server directory to store your environment variables:
*/