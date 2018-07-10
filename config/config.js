module.exports = {
  development: {
    username: 'root',
    password: '',
    database: 'piggybank',
    host: '127.0.0.1',
    dialect: "mongodb"
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mongodb"
  },
  production: {
    use_env_variable: "JAWSDB_URL",
    dialect: "mongodb"
  }
}