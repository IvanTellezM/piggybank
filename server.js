
const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require('body-parser');
const routes = require("./routes");
const passport = require('passport');
// const config = require('./server/config');
const logger = require('morgan')
const PORT = process.env.PORT || 3001;

// connect to the database and load models
// uses environmental variable for deployment (Heroku) or defaults to local config   I.T
require('./server/models').connect(process.env.MONGODB_URI || config.dbUri);

// Use morgan logger for logging requests   I.T.
app.use(logger("dev"));

// Serve up static assets (usually on heroku) I. T
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// tell the app to parse HTTP body messages  I. T
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// pass the passport middleware  I. T. 
app.use(passport.initialize());

// load passport strategies  I. T. 
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);

// pass the authenticaion checker middleware  I. T. 
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);

// routes  I. T. 
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);


// Send every request to the React app
// Define any API routes before this runs
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



// Port
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/piggybank");

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

