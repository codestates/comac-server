require("dotenv").config();

// RDS환경 mysql
module.exports = {
  "development": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "port": process.env.DATABASE_PORT,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "port": process.env.DATABASE_PORT,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.DATABASE_USERNAME,
    "password": process.env.DATABASE_PASSWORD,
    "database": process.env.DATABASE_NAME,
    "port": process.env.DATABASE_PORT,
    "host": process.env.DATABASE_HOST,
    "dialect": "mysql"
  }
}

// local환경 mysql
// module.exports = {
//   "development": {
//     "username": process.env.DATABASE_USERNAME,
//     "password": process.env.DATABASE_PASSWORD,
//     "database": process.env.DATABASE_NAME,
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": process.env.DATABASE_USERNAME,
//     "password": process.env.DATABASE_PASSWORD,
//     "database": process.env.DATABASE_NAME,
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": process.env.DATABASE_USERNAME,
//     "password": process.env.DATABASE_PASSWORD,
//     "database": process.env.DATABASE_NAME,
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }