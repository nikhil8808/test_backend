module.exports={
  "development": {
    "username": "root",
    "password": null,
    "database": "test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username":  process.env.MYSQLUSER,
    "password":  process.env.MYSQLPASSWORD,
    "database":  process.env.MYSQL_DATABASE,
    "host":  process.env.MYSQLHOST,
    "dialect": "mysql"
  },
  "production": {
    "username":  process.env.MYSQLUSER,
    "password":  process.env.MYSQLPASSWORD,
    "database":  process.env.MYSQL_DATABASE,
    "host":  process.env.MYSQLHOST,
    "dialect": "mysql"
  }
}
