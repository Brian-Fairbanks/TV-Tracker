module.exports = function(props = {}, user) {
  return `
</header>
<div class="flex justify-center text-center mt-2">
  <div class="container flex flex-wrap h-full bg-teal-400 flex">
    <div class="w-full text-center text-white mb-2 p-3 bg-gray-900">
      <h1 class="text-2xl font-bold">${props.Title} (${props.Year})</h1>
      ${props.Released}
    </div>
    <div class="w-full sm:w-1/2 lg:w-1/3 flex justify-center">
      <img class="m-2 w-1/2 sm:w-full h-auto" src="${props.Poster}" src="${
  props.Title
} Poster">
    </div>
    <div class="w-full sm:w-1/2 lg:w-2/3 px-3">
      <div class="flex flex-wrap w-full justify-between text-center font-bold">
        ${props.Ratings.map(rating => {
    return `<div class="w-1/3">
              <span>
              ${
  rating.Source === "Internet Movie Database"
    ? "IMDB"
    : rating.Source === "Rotten Tomatoes"
      ? "RT"
      : rating.Source === "Metacritic"
        ? "MC"
        : ""
}
              </span>
              <span>${rating.Value}</span>
            </div>`;
  }).join("")}
      </div>

      <div class="pt-4">
        <span class="font-bold border border-black rounded py-0 px-2">${
  props.Rated
}</span>
        ${props.Genre}
        <br>
        (${props.Runtime})
        ${props.Language}
        (${props.Country})
      </div>

      <div class="py-5">
        ${props.Plot}
      </div>

      <div>
        ${props.Awards}
      </div>

      <div>
        Directed by ${props.Director}
      </div>

      <div class="w-full flex m-2 text-center pt-4">
        <div class="w-1/2">
          <div class="font-bold">Writers</div><ul>${props.Writer.split(",")
    .map(writer => {
      return `<li>${writer}</li>`;
    })
    .join("")}</ul>
        </div>
        <div class="w-1/2">
        <div class="font-bold">Actors</div> <ul>${props.Actors.split(",")
    .map(actor => {
      return `<li>${actor}</li>`;
    })
    .join("")}</ul>
        </div>
      </div>
      ${user ? `<div id="addWatchlist" data-movie-id="${props.id}" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-gray-900 hover:bg-white mt-4 sm:mt-0">Add to Watchlist</div>` : ""}
    </div>
    <div class="w-full flex justify-around mt-2 p-3 bg-gray-900">
      ${JSON.parse(props.uTellyLocations)
    .map(location => {
      return `<a href="${location.url}"><img class="logo" src="${location.icon}" src="${location.name}"></a>`;
    })
    .join("")}
    </div>
  </div>
</div>

<script type="text/javascript src="/js/watchList.js"></script>
  `;
};
