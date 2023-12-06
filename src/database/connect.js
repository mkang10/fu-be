import mysql2 from "mysql2";
import { config as configDotenv } from "dotenv";
configDotenv();
const DB_PORT = 3306;
const DB_HOST = "localhost";
const DB_USER = "root";
const DB_PASS = "123456";
const MYSQL_DB = "fptblog";



// const DB_PORT = 43164;
// const DB_HOST = "monorail.proxy.rlwy.net";
// const DB_USER = "root";
// const DB_PASS = "ag156dFHcFbb2bgHC1dH2F6c-23GBb2A";
// const MYSQL_DB = "fptblog";
export const db = mysql2.createConnection({
  host: DB_HOST,
  port: DB_PORT,
  user: DB_USER,
  password: DB_PASS,
  database: MYSQL_DB,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database:", err);
    return;
  }
  console.log("Connected to the database");
});
