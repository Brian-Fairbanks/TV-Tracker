/*===============================================================
        Dependencies
===============================================================*/
// Using Axios to make API calls.
var axios = require("axios");
var db = require("../models");

/*===============================================================
        API Routes
===============================================================*/
module.exports = function(app) {
  // Gets all data for a given movie title
  // calls OMDB Free api to ensure you are looking for a valid show.  Ends here if not valid (OMDB said no results)
  // Check if data is in Movie Database, using the OMDB.data.Title
  // call uTelly to get hosting information, and store in database for the next time it is called
  // return all information needed.
  app.get("/api/movies/:movie", async function(req, res) {
    const movieName = req.params.movie;
    var dbData;

    // Pull information from OMDB
    const omdb = await axios({
      method: "GET",
      url: "https://www.omdbapi.com/",
      params: {
        t: movieName,
        apikey: process.env.OMDBAPI
      }
    });

    // If OMDB fails to find data, end the process.
    if (omdb.data.Response === "False") {
      console.log(`${movieName} could was not found.`);
      return res.send(omdb.data);
    }

    // Check local database to see if it has info
    dbData = await db.Movies.findOne({
      where: {
        imdbID: omdb.data.imdbID
      }
    });

    // if not there, make a call to uTelly for the tile.  Expect multiple results, and handle them all
    if (dbData === null) {
      console.log("Data was not found.  Querying UTelly...");

      // get data from UTELLY
      const uTelly = await axios({
        method: "GET",
        url:
          "https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/lookup",
        headers: {
          "content-type": "application/octet-stream",
          "x-rapidapi-host":
            "utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com",
          "x-rapidapi-key": process.env.UTELLYAPI
        },
        params: {
          term: omdb.data.Title,
          country: "us"
        }
      });

      //console.log(uTelly.data);

      for (movie of uTelly.data.results) {
        //console.log(movie);
        var newMovie = {
          name: movie.name,
          imdbID: movie.external_ids.imdb.id,

          uTellyUpdated: uTelly.data.updated,
          uTellyID: movie.id,
          uTellyPicture: movie.picture,
          uTellyLocations: JSON.stringify(movie.locations)
        };

        // insert data into database, if it doesnt already exist
        let thisID = await db.Movies.findOne({
          where: { imdbID: omdb.data.imdbID }
        });

        if (thisID !== null) {
          await db.Movies.create(newMovie);
        }

        // and store this movie for the return if it does actually match the IMDB id
        if (newMovie.imdbID === omdb.data.imdbID) {
          console.log(newMovie);
          dbData = {};
          dbData.dataValues = newMovie;
        }
      }

      // if STILL null after all of that, then UTelly has no idea what this content is, and we will create an empty listing so it doesnt cause issues in the future.
      if (dbData === null) {
        await db.Movies.create({
          name: omdb.data.Title,
          imdbID: omdb.data.imdbID
        });
        dbData.dataValues = {
          name: omdb.data.Title,
          imdbID: omdb.data.imdbID,
          uTellyUpdated: null,
          uTellyID: null,
          uTellyPicture: null,
          uTellyLocations: null
        };
      }
    }

    //We finall have all the data.  Return it.
    res.json({ ...omdb.data, ...dbData.dataValues });
  });
};
