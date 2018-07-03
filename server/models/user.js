var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.js");

var User = sequelize.define("user", {
  username: Sequelize.STRING,
  password: Sequelize.INTEGER,
  balance: Sequelize.INTEGER
});

// Syncs with DB
User.sync();

module.exports = User;