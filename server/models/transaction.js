var Sequelize = require("sequelize");
// sequelize (lowercase) references my connection to the DB.
var sequelize = require("../config/config.js");

var Transaction = sequelize.define("transaction", {
  type: Sequelize.STRING, //Either withdraw or deposit
  category: Sequelize.STRING,
  amount: Sequelize.INTEGER,
  time: Sequelize.NOW
});

// Syncs with DB
Transaction.sync();

module.exports = Transaction;