/*===============================================================
        Dependencies
===============================================================*/
const db = require("../models");

/*===============================================================
        API Routes
===============================================================*/
module.exports = function(app) {

  app.get("/api/user/watchlist", async function(req, res) {
    if(!req.user){
      return res.status(401).send("You cannot use this function without signing in.");
    }

    const userData = await req.user.findAll({include:[db.Movies]});
    return res.json(userData.Movies);
  });

  app.post("/api/user/watchlist", function(req, res){
    if(!req.user){
      return res.status(401).send("You cannot use this function without signing in.");
    }
    console.log(`Ready to add movie ${req.movie} to ${req.user.email}`)
    //req.user.addMovies();
    res.end();
  });

};
