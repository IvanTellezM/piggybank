const mongoose = require('mongoose');

module.exports.connect = (uri) => {
  mongoose.connect(uri);
  // plug in the promise library:
  mongoose.Promise = global.Promise;


  mongoose.connection.on('error', (err) => {
    console.error(`Mongoose connection error: ${err}`);
    process.exit(1);
  });

  // load models
  require('./user');
};


module.exports = {
  User: require("./user"),
  Transaction: require("./transaction")
};


import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.js";

ReactDOM.render(<App />, document.getElementById("root"));