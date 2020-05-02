var moviesActive = false;
document.getElementById("movie-arrow").addEventListener("click", function () {
  moviesActive = !moviesActive;
  if (moviesActive) {
    document
      .querySelectorAll(".movie")
      .forEach(item => item.classList.add("hidden"));
    document.getElementById("movie-arrow").classList.add("fa-caret-square-down");
    document.getElementById("movie-arrow").classList.remove("fa-caret-square-up");

  } else {
    document
      .querySelectorAll(".movie")
      .forEach(item => item.classList.remove("hidden"));
    document.getElementById("movie-arrow").classList.add("fa-caret-square-up");
    document.getElementById("movie-arrow").classList.remove("fa-caret-square-down");
  }
});

var showsActive = false;
document.getElementById("show-arrow").addEventListener("click", function () {
  showsActive = !showsActive;
  if (showsActive) {
    document
      .querySelectorAll(".show")
      .forEach(item => item.classList.add("hidden"));
    document.getElementById("show-arrow").classList.add("fa-caret-square-down");
    document.getElementById("show-arrow").classList.remove("fa-caret-square-up");
  } else {
    document
      .querySelectorAll(".show")
      .forEach(item => item.classList.remove("hidden"));
    document.getElementById("show-arrow").classList.add("fa-caret-square-up");
    document.getElementById("show-arrow").classList.remove("fa-caret-square-down");
  }
});

$(document).ready(function () {
  appenddata();
  $(document).on("click", ".delete", handleWatchlistRemove);

});

function handleWatchlistRemove() {
  console.log(this);
  const movieID = $(this).attr("data-movie-id");
  $.ajax({
    url: "/api/user/watchlist",
    type: "DELETE",
    data: { movieID: movieID }
  })
    .then(function (response) {
      console.log(response);
      appenddata();
    });
}

async function appenddata() {
  const watchlist = await getWatchList();

  $("#movies").empty();
  $("#shows").empty();
  watchlist.forEach(item => {

    var htmlstring = `<h2 id="title"><img src="${item.poster}" alt="Movie poster" style="width: 100px;"/>${item.name}</h2>
      <h2 id="genre" class="mt-3 sm:m-0">${item.genre.split(",")[0]}</h2>
      <h2 id="release-date">${item.releaseDate}</h2>
      <h2 id="run-time">${item.runtime}</h2>
      <h3 class="text-teal-200 hover:text-teal-500 mt-3 sm:m-0"><a href="/content/${item.name}-${item.imdbID}">
      More info...</a></h3>
      <div data-movie-id="${item.id}" class="absolute bg-red-800 pb-6 w-5 h-5 rounded cursor-pointer delete" style="top: 10px; right: 10px; opacity: 80%;">X</div>
      </div>`;

    if (item.type === "movie") {
      htmlstring = "<div class='relative sm:flex-row flex-col w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white movie'>" + htmlstring;
      $("#movies").append(htmlstring);
    }
    else {
      htmlstring = "<div class='relative sm:flex-row flex-col w-full lg:max-w-4xl md:max-w-3xl sm:max-w-xl max-w-lg m-auto container flex-auto flex justify-around py-3 text-center items-center bg-gray-900 border-b-2 border-teal-500 text-white show'>" + htmlstring;
      $("#shows").append(htmlstring);
    }
  });

}

