/*===============================================================
        Dependencies
===============================================================*/
// Using Axios to make API calls.
const axios = require("axios");
const helper = require("./helper.js");

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
    res.json(await helper.getMovieData(req.params.movie));
  });

  app.get("/api/search/:query/:page?", async function(req, res) {
    const searched = req.params.query;
    var page = req.params.page;
    // optional page.  If not included, give it 1
    if (!page) {
      page = 1;
    }

    // Pull information from OMDB
    const omdb = await axios({
      method: "GET",
      url: "https://www.omdbapi.com/",
      params: {
        s: searched,
        apikey: process.env.OMDBAPI,
        page: page
      }
    });
    //console.log(omdb.data);
    omdb.data.Search = omdb.data.Search.filter(content =>
      ["movie", "series"].includes(content.Type)
    );
    return res.json(omdb.data);
  });
};
