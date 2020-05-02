const axios = require("axios");
const db = require("../models");
const sequelize = require("sequelize");

/*===============================================================
      Helper Functions
===============================================================*/
async function getMovieData(movieID) {
  var dbData;

  // Pull information from OMDB
  const omdb = await axios({
    method: "GET",
    url: "https://www.omdbapi.com/",
    params: {
      i: movieID,
      apikey: process.env.OMDBAPI
    }
  });

  // If OMDB fails to find data, end the process.
  if (omdb.data.Response === "False") {
    console.log(`${movieID} could was not found.`);
    return omdb.data;
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

    var uMovie = uTelly.data.results.find(movie => movie.external_ids.imdb.id === omdb.data.imdbID);
    console.log(uMovie);

    // the movie needs these fields regardless.
    var newMovie = {
      name: omdb.data.Title,
      imdbID: omdb.data.imdbID,

      genre: omdb.data.Genre,
      releaseDate: omdb.data.Released,
      runtime: omdb.data.Runtime,
      poster: omdb.data.Poster,
      type: omdb.data.Type,

      uTellyUpdated: null,
      uTellyID: null,
      uTellyPicture: null,
      uTellyLocations: null
    };

    //if UTelly found info, add that too.
    if (uMovie) {
      newMovie.uTellyUpdated = uTelly.data.updated;
      newMovie.uTellyID = uMovie.id;
      newMovie.uTellyPicture = uMovie.picture;
      newMovie.uTellyLocations = JSON.stringify(uMovie.locations);
    }
    // insert it into the database
    await db.Movies.create(newMovie);

    //return the database version of data, so it includes the proper movie id
    dbData = await db.Movies.findOne({
      where: {
        imdbID: omdb.data.imdbID
      }
    });
  }
  else {
    db.Movies.update({ views: sequelize.literal("views + 1") }, { where: { imdbID: omdb.data.imdbID } });
  }

  //We finally have all the data, return it
  return { ...omdb.data, ...dbData.dataValues };
}

module.exports = {
  getMovieData: movie => getMovieData(movie)
};
