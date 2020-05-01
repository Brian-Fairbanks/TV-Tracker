var moviesActive = false;
document.getElementById("movie-hide").addEventListener("click", function () {
  moviesActive = !moviesActive;
  if (moviesActive) {
    document
      .querySelectorAll(".movie")
      .forEach(item => item.classList.add("hidden"));
  } else {
    document
      .querySelectorAll(".movie")
      .forEach(item => item.classList.remove("hidden"));
  }
});

var showsActive = false;
document.getElementById("show-hide").addEventListener("click", function () {
  showsActive = !showsActive;
  if (showsActive) {
    document
      .querySelectorAll(".show")
      .forEach(item => item.classList.add("hidden"));
  } else {
    document
      .querySelectorAll(".show")
      .forEach(item => item.classList.remove("hidden"));
  }
});

$(document).ready(function () {
  getWatchList();

});
function getWatchList() {
  $.ajax({
    url: "/api/user/watchlist",
    type: "GET"
  }).then(function (watchlist) {
    watchlist.forEach(item => {

      var htmlstring = `<h2 id="title"><img src="${item.poster}" alt="Movie poster" style="width: 100px;"/>${item.name}</h2>
      <h2 id="genre">${item.genre.split(",")[0]}</h2>
      <h2 id="release-date">${item.releaseDate}</h2>
      <h2 id="run-time">${item.runtime}</h2>
      <h3 class="text-teal-200 hover:text-teal-500"><a href="/content/${item.name}-${item.imdbID}">
      More info...</a></h3>
      </div>`;

      if (item.type === "movie") {
        htmlstring = "<div class='w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white movie'>" + htmlstring;
        $("#movies").append(htmlstring);
      }
      else {
        htmlstring = "<div class='w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white show'>" + htmlstring;
        $("#shows").append(htmlstring);
      }
    });
  });
}
