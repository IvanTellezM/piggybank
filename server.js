
const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const bodyParser = require("body-parser");
<<<<<<< HEAD
// const passport = require("passport"), LocalStrategy = require('passport-local').Strategy;
// var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const sequelize = require("sequelize");
// const mongoose = require("mongoose");
const routes = require("./routes");
=======

>>>>>>> master

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

<<<<<<< HEAD
// app.use(routes);
=======
>>>>>>> master

// Routes

require("./server/routes/passport.js")(app);

// Port

// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`);
  });
// });

