require("dotenv").config();

module.exports = {
  "development": {
    "username": process.env.LOCAL_DB_USERNAME,
    "password": process.env.LOCAL_DB_PASSWORD,
    "database": process.env.LOCAL_DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.LOCAL_DB_USERNAME,
    "password": process.env.LOCAL_DB_PASSWORD,
    "database": process.env.LOCAL_DB_NAME,
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.RDS_DB_USERNAME,
    "password": process.env.RDS_DB_PASSWORD,
    "database": process.env.RDS_DB_NAME,
    "port": process.env.RDS_DB_PORT,
    "host": process.env.RDS_DB_HOST,
    "dialect": "mysql"
  }
}
