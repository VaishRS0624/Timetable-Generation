const mysql = require('mysql');  
require('dotenv').config(); 

const db = mysql.createConnection({  
  host: 'localhost',  
  user: 'process.env.DB_USER',       // Replace with your database username  
  password: 'process.env.DB_PASSWORD',    // Replace with your database password  
  database: 'process.env.DB_NAME '        // The name of your database  
});  

db.connect(err => {  
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('Connected to MySQL database'); 
});  

module.exports = db;



