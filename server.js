
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const passport = require('passport');
const logger = require('morgan');
const routes = require("./routes");

const db = require('./models')

const PORT = process.env.PORT || 8080;

const app = express();

// connect to the database and load models
// uses environmental variable for deployment (Heroku) or defaults to local config
require('./models').connect(process.env.MONGODB_URI || config.dbUri);

// // Port DB
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/piggybank");

// Use morgan logger for logging requests
app.use(logger("dev"));

//app to parse HTTP body messages
app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());


// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// tell the app to parse HTTP body messages
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// pass the passport middleware
app.use(passport.initialize());


// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

Routes
const authRoutes = require('./routes/api/auth');
const apiRoutes = require('./routes/api/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);

app.use(routes);

// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

