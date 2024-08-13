// db.js
const mysql = require("mysql2");

// Database connection details
const db = mysql.createConnection({
  host: "database-1.cvgio2aq09cd.ap-south-1.rds.amazonaws.com",
  user: "admin",
  password: "Tamosa1985",
  port: "3306",
  database: "tamosa",
  connectTimeout: 10000  // Timeout in milliseconds (10 seconds)
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err.stack);
    return;
  }
  console.log("Connected to the database.");
});

module.exports = db;
