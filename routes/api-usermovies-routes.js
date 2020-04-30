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
    try{
      const userData = await db.User.findOne({where:{id:req.user.id},include:[db.Movies]});
      return res.json(userData.Movies);
    }
    catch(err){
      // error!  print cause on the server, and send back that somethign went wrong
      console.error("Error getting user watchlist: "+err.stack);
      res.status(500).send("OOPS! Something went wrong on our side!");
    }
  });

  app.post("/api/user/watchlist", async function(req, res){
    if(!req.user){
      return res.status(401).send("You cannot use this function without signing in.");
    }
    try{
      //get fresh copies of movie and user from the database
      const curUser = await db.User.findOne({where:{id:req.user.id}});
      const curMovie = await db.Movies.findOne({where:{id:req.body.movieID}});
      //and add on the through table
      await curUser.addMovies(curMovie);
      res.end();
    }
    catch(err){
      // error!  print cause on the server, and send back that somethign went wrong
      console.error("Error inserting to watchlist: "+err.stack);
      res.status(500).send("OOPS! Something went wrong on our side!");
    }
  });

  app.delete("/api/user/watchlist", async function(req, res){
    if(!req.user){
      return res.status(401).send("You cannot use this function without signing in.");
    }
    try{
      //get fresh copies of movie and user from the database
      const curUser = await db.User.findOne({where:{id:req.user.id}});
      const curMovie = await db.Movies.findOne({where:{id:req.body.movieID}});
      //and add on the through table
      await curUser.removeMovies(curMovie);
      res.end();
    }
    catch(err){
      // error!  print cause on the server, and send back that somethign went wrong
      console.error("Error inserting to watchlist: "+err.stack);
      res.status(500).send("OOPS! Something went wrong on our side!");
    }
  });

};
