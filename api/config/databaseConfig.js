require("dotenv").config();
const mysql = require("mysql");

// database configuration

const db = mysql.createConnection({
  host: process.env.db_host,
  user: process.env.db_user,
  password: process.env.db_password,
  database: process.env.db_database,
});

module.exports = db;
