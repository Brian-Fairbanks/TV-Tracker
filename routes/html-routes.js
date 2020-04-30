// Requiring path to so we can use relative routes to our HTML files
// var path = require("path");
const view = require("../views/Index");
// const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
var isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/user");
    }
    // res.sendFile(path.join(__dirname, "../public/signup.html"));
    res.send(view.header(view.signup()));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/user");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.send(view.header(view.login()));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  app.get("/user", isAuthenticated, function(req, res) {
    res.send(view.header(view.user()));
  });
};
