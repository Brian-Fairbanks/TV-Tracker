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
    return res.redirect("/home");
  });

  app.get("/home", function(req, res) {
    return res.send(view.header(view.home(), req.user, "Home"));
  });

  app.get("/login", function(req, res) {
    // If the user already has an account send them to the members page
    if (req.user) {
      return res.redirect("/user");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.send(view.header(view.login(),req.user, "Log In to W4",false));
  });

  app.get("/signup", function(req, res) {
    // If the user wishes to make an account they will be sent to signup page
    if (req.user) {
      return res.redirect("/user");
    }
    // res.sendFile(path.join(__dirname, "../public/login.html"));
    res.send(view.header(view.signup(),req.user,"Sign Up for W4",false));
  });

  app.get("/content/:content-:imdb", async function(req, res) {
    //get data from API
    const helper = require("./helper.js");

    const movie = await helper.getMovieData(req.params.imdb);
    // If the user is already signed in
    return res.send(view.header(view.content(movie, req.user),req.user, `View ${req.params.content}`));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page

  app.get("/user", isAuthenticated, function(req, res) {
    res.send(view.header(view.user(),req.user, `Watchlist:${req.user.email}`));
  });
};
