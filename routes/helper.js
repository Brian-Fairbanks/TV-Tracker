const axios = require("axios");
const db = require("../models");

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

    for (movie of uTelly.data.results) {
      //console.log(movie);
      var newMovie = {
        name: movie.name,
        imdbID: movie.external_ids.imdb.id,

        genre: omdb.data.Genre,
        releaseDate : omdb.data.Released,
        runtime: omdb.data.Runtime,
        poster: omdb.data.Poster,
        type: omdb.data.Type,

        uTellyUpdated: uTelly.data.updated,
        uTellyID: movie.id,
        uTellyPicture: movie.picture,
        uTellyLocations: JSON.stringify(movie.locations)
      };

      // insert data into database, if it doesnt already exist
      let thisID = await db.Movies.findOne({
        where: { imdbID: movie.external_ids.imdb.id }
      });

      if (thisID === null) {
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
      dbData = {};
      await db.Movies.create({
        name: omdb.data.Title,
        imdbID: omdb.data.imdbID
      });
      dbData.dataValues = {
        name: omdb.data.Title,
        imdbID: omdb.data.imdbID,

        genre: omdb.data.Genre,
        releaseDate : omdb.data.Released,
        runtime: omdb.data.Runtime,
        poster: omdb.data.Poster,
        type: omdb.data.Type,

        uTellyUpdated: null,
        uTellyID: null,
        uTellyPicture: null,
        uTellyLocations: null
      };
    }
  }
  //We finally have all the data, return it
  return { ...omdb.data, ...dbData.dataValues };
}

module.exports = {
  getMovieData: movie => getMovieData(movie)
};
